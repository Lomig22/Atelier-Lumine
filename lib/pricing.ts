import { PriceBreakdown, PriceResult, SignConfig } from './types'

const BASE_COST_PER_CM2 = 0.35 // € per cm²
const PLEXI_PER_CM2 = 0.05 // € per cm²
const PLEXI_MIN = 15 // € minimum for plexi panel

const SHAPE_MULTIPLIER: Record<SignConfig['shape'], number> = {
  rectangle: 1.0,
  circle: 1.05,
  outline: 1.12, // découpe autour du texte
  custom: 1.2,
}

const LED_MULTIPLIER = {
  neon: 1.1,
  dot: 1.0,
} as const

export function computePrice(config: SignConfig): PriceResult {
  const area = Math.max(1, Math.round(config.widthCm * config.heightCm)) // cm²
  const baseCost = area * BASE_COST_PER_CM2
  const shapeMult = SHAPE_MULTIPLIER[config.shape]
  const ledMult = LED_MULTIPLIER[config.ledType]

  const multipleColors = config.fillColor.toLowerCase() !== config.strokeColor.toLowerCase()
  const colorsSurcharge = multipleColors ? 12 + area * 0.03 : 0

  const glowSurcharge = (config.glowIntensity / 100) * (0.05 * baseCost)

  const outlineSurcharge = config.strokeWidth > 0 ? area * 0.02 : 0

  const plexiRaw = config.plexiglass ? area * PLEXI_PER_CM2 : 0
  const plexiSurcharge = config.plexiglass ? Math.max(PLEXI_MIN, plexiRaw) : 0

  const subtotal = baseCost * shapeMult * ledMult + colorsSurcharge + glowSurcharge + outlineSurcharge + plexiSurcharge
  const total = Math.round(subtotal * 100) / 100

  const breakdown: PriceBreakdown = {
    baseAreaCm2: area,
    baseCost: round2(baseCost),
    shapeMultiplier: shapeMult,
    ledMultiplier: ledMult,
    colorsSurcharge: round2(colorsSurcharge),
    glowSurcharge: round2(glowSurcharge),
    outlineSurcharge: round2(outlineSurcharge),
    plexiSurcharge: round2(plexiSurcharge),
    subtotal: round2(subtotal),
  }

  return { total, breakdown }
}

function round2(n: number) {
  return Math.round(n * 100) / 100
}
