import { SignConfig } from './types'

const PX_PER_CM = 37.7952755906

export function generateSignSVG(cfg: SignConfig) {
  const width = Math.max(10, cfg.widthCm) * PX_PER_CM
  const height = Math.max(5, cfg.heightCm) * PX_PER_CM
  const glow = Math.max(0, Math.min(100, cfg.glowIntensity))
  const strokeW = Math.max(0, cfg.strokeWidth)
  const bg = cfg.background ? `<rect width="100%" height="100%" fill="#0a0a0a"/>` : ''
  const plexi = cfg.plexiglass ? `<rect width="100%" height="100%" fill="#ffffff" opacity="0.06"/>` : ''

  const clip = cfg.shape === 'circle'
    ? `<clipPath id="shapeClip"><circle cx="50%" cy="50%" r="${Math.min(width, height) / 2 - 2}"/></clipPath>`
    : cfg.shape === 'rectangle'
      ? `<clipPath id="shapeClip"><rect x="2" y="2" width="${width - 4}" height="${height - 4}" rx="16"/></clipPath>`
      : '' // outline/custom not clipping here for simplicity

  const filter = `<filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="${(glow / 100) * 8}" result="blur"/>
    <feMerge>
      <feMergeNode in="blur"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>`

  const content = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      font-size="${Math.min(width, height) * 0.28}" fill="${cfg.fillColor}"
      stroke="${cfg.strokeColor}" stroke-width="${strokeW}"
      style="paint-order: stroke; filter: url(#glow); letter-spacing: 1px;">
      ${escapeXml(cfg.text)}
    </text>`

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    ${filter}
    ${clip}
  </defs>
  ${bg}
  ${clip ? `<g clip-path="url(#shapeClip)">` : ''}
  ${content}
  ${clip ? `</g>` : ''}
  ${plexi}
</svg>`
}

function escapeXml(unsafe: string) {
  return unsafe.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&': return '&amp;'
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '"': return '&quot;'
      case "'": return '&#039;'
      default: return c
    }
  })
}
