import { Poppins } from 'next/font/google';

export const poppinsSans = Poppins({
  variable: '--poppinsSans-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['300', '400', '500', '600', '700', '800']
});