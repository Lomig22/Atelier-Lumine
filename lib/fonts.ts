import { Inter, Poppins, Montserrat, Raleway, Outfit, Manrope, Space_Grotesk, Bebas_Neue, Nunito, Oswald } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300','400','500','600','700'] })
const raleway = Raleway({ subsets: ['latin'], weight: ['300','400','500','600','700'] })
const outfit = Outfit({ subsets: ['latin'], weight: ['300','400','500','600','700'] })
const manrope = Manrope({ subsets: ['latin'], weight: ['300','400','500','600','700'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300','400','500','600','700'] })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const nunito = Nunito({ subsets: ['latin'], weight: ['300','400','600','700'] })
const oswald = Oswald({ subsets: ['latin'], weight: ['300','400','500','600','700'] })

export const fontOptions = [
  { id: 'inter', name: 'Inter', className: inter.className },
  { id: 'poppins', name: 'Poppins', className: poppins.className },
  { id: 'montserrat', name: 'Montserrat', className: montserrat.className },
  { id: 'raleway', name: 'Raleway', className: raleway.className },
  { id: 'outfit', name: 'Outfit', className: outfit.className },
  { id: 'manrope', name: 'Manrope', className: manrope.className },
  { id: 'space-grotesk', name: 'Space Grotesk', className: spaceGrotesk.className },
  { id: 'bebas-neue', name: 'Bebas Neue', className: bebas.className },
  { id: 'nunito', name: 'Nunito', className: nunito.className },
  { id: 'oswald', name: 'Oswald', className: oswald.className },
]

export const fontsClass = fontOptions.map(f => f.className).join(' ')
export const poppinsClass = poppins.className
