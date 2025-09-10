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

    // Provider 1: WordPress mShots (free, decent reliability)
    const mshotsUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(targetUrl)}?w=${encodeURIComponent(width)}`;

    const res = await fetch(mshotsUrl, {
      // Let the platform cache this request
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return new Response('Failed to capture screenshot', { status: 502 });
    }

    // Pass through the bytes as-is
    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        // Cache for a day at the CDN, allow stale while we revalidate
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  } catch (err) {
    return new Response('Internal Server Error', { status: 500 });
  }
} 