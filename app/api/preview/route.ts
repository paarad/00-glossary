import { NextRequest } from 'next/server';

export const revalidate = 3600; // Revalidate every hour on the edge/CDN

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get('url');
    const width = searchParams.get('w') || '1200';

    if (!targetUrl) {
      return new Response('Missing url param', { status: 400 });
    }

    // Provider 1: Thum.io (direct image)
    const thumUrl = `https://image.thum.io/get/width/${encodeURIComponent(width)}/${encodeURIComponent(
      targetUrl
    )}`;

    let upstream = await fetch(thumUrl, { next: { revalidate: 3600 } });

    // Fallback: WordPress mShots
    if (!upstream.ok) {
      const mshotsUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(targetUrl)}?w=${encodeURIComponent(
        width
      )}`;
      upstream = await fetch(mshotsUrl, { next: { revalidate: 3600 } });
    }

    if (!upstream.ok) {
      return new Response('Failed to capture screenshot', { status: 502 });
    }

    const contentType = upstream.headers.get('content-type') || 'image/jpeg';
    const buffer = await upstream.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  } catch (err) {
    return new Response('Internal Server Error', { status: 500 });
  }
} 