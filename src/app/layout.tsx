import type { Metadata, Viewport } from 'next';
import { Raleway, Unbounded } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway', display: 'swap' });
const unbounded = Unbounded({ subsets: ['latin'], variable: '--font-unbounded', display: 'swap' });

export const metadata: Metadata = {
  title: 'Roma Hospitalar | Distribuindo saúde, entregando resultado',
  description: 'Roma Hospitalar. Soluções em fornecimento de materiais e produtos hospitalares. Conheça nossas soluções e entre em contato com a equipe.',
  openGraph: {
    title: 'Roma Hospitalar',
    description: 'Distribuindo saúde, entregando resultado.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: '/marca/favicon_roma.png', type: 'image/png' }], shortcut: '/marca/favicon_roma.png' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#032551' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${raleway.variable} ${unbounded.variable}`}>{children}</body></html>;
}
