import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KR plz 🙏',
  description:
    'Translate foreign languages in your game in real time and play with ease',
  keywords: ['Visual Novel', 'Translator'],
  openGraph: {
    title: 'KR plz 🙏',
    description: 'Image Streaming Translation Tool for MAC',
    url: 'https://kr-plz-web.vercel.app/',
    siteName: 'kr-plz-web',
    images: [
      {
        url: '../public/ogImage.png',
        width: 1192,
        height: 780,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png',
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
