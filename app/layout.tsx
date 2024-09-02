import './globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { fontSans } from '@/lib/fonts';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [
		{
			name: 'waelmando ',
			url: 'https://github.com/waelmando0',
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'antialiased font-sans min-h-screen bg-dark-300',
					fontSans.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}
