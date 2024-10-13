import { Roboto, Pixelify_Sans } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const pixelify_Sans = Pixelify_Sans({
  subsets: ['latin'],
  display: 'swap',
})