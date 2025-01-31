import { Roboto, Ms_Madi, Source_Sans_3 } from 'next/font/google';

export const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const msMadi = Ms_Madi({
  variable: '--font-ms-madi',
  subsets: ['latin'],
  weight: ['400'],
});

export const sourceSans3 = Source_Sans_3({
  variable: '--font-source-sans-3',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});