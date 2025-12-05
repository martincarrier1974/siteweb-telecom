import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  const width = params.width || '400'
  const height = params.height || '300'
  
  // Générer une image placeholder SVG avec un design moderne
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF6600;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#000000;stop-opacity:0.05" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <circle cx="50%" cy="40%" r="30" fill="#FF6600" opacity="0.2"/>
      <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="16" 
            fill="#9ca3af" text-anchor="middle" dominant-baseline="middle" font-weight="500">
        ${width} × ${height}
      </text>
    </svg>
  `.trim()
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}

