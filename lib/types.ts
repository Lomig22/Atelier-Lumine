export type SignShape = 'rectangle' | 'outline' | 'circle' | 'custom'
export type LedType = 'neon' | 'dot'

export interface SignConfig {
  text: string
  fontId: string
  widthCm: number
  heightCm: number
  fillColor: string
  strokeColor: string
  strokeWidth: number
  glowIntensity: number // 0-100
  background: boolean
  plexiglass: boolean
  shape: SignShape
  ledType: LedType
}

export interface PriceBreakdown {
  baseAreaCm2: number
  baseCost: number
  shapeMultiplier: number
  ledMultiplier: number
  colorsSurcharge: number
  glowSurcharge: number
  outlineSurcharge: number
  plexiSurcharge: number
  subtotal: number
}

export interface PriceResult {
  total: number
  breakdown: PriceBreakdown
}
