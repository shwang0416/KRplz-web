import '../globals.css';
import { Inter } from 'next/font/google';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ['latin'] });

const BreakAllLang = ['jp'] as const;
type BreakAllLangs = (typeof BreakAllLang)[number];
const isBreakAllLang = (x: any): x is BreakAllLangs => BreakAllLang.includes(x);

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  if (!lng) lng = 'kr';

  return (
    <html
      lang={lng}
      className={`${isBreakAllLang(lng) ? 'break-all' : 'break-keep'}`}
    >
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
