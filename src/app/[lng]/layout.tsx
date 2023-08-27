import '../globals.css';
import { Inter } from 'next/font/google';
import { languages } from '../i18n/settings';
import Nav from './nav';
// import imgSrc from './KRplz_img_1.png';
// import Image from 'next/image';
// import imgSrc from '@assets/KRplz_img_1.png';

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
      <body className={inter.className}>
        <header className="bg-white">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-8 sm:px-10 lg:px-12">
            <div className="flex flex-1 items-center justify-between">
              <Nav lng={lng} />
            </div>
          </div>
        </header>
        <main>
          <div className="bg-gradient-to-b from-indigo-100 via-purple-300 to-pink-400 to-90% flex flex-col items-center justify-left p-10 h-2/3">
            {/* <Image
              src="/woman-shrugging.svg"
              alt="Logo"
              // className="dark:invert"
              width={200}
              height={1}
              priority
            /> */}
            <div className="z-10 max-w-5xl w-full flex-col items-center justify-between text-sm lg:flex">
              {children}
            </div>
          </div>
          <div className="bg-gradient-to-b from-pink-400 absolute w-screen h-1/3">
            {/* <Image src={imgSrc} /> */}
          </div>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
