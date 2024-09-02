import { Plus_Jakarta_Sans as FontSans } from 'next/font/google';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	weight: ['300', '400', '500', '600', '700'],
});
