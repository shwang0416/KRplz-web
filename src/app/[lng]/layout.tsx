import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng}>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}