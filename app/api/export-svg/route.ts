import { NextResponse } from 'next/server'
import { generateSignSVG } from '@/lib/svg'
import { SignConfig } from '@/lib/types'

export async function POST(req: Request) {
  const cfg = (await req.json()) as { config: SignConfig }
  if (!cfg?.config) return NextResponse.json({ error: 'config manquant' }, { status: 400 })
  const svg = generateSignSVG(cfg.config)
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Content-Disposition': 'attachment; filename="enseigne.svg"'
    }
  })
}
