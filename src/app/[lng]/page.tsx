// import Image from 'next/image';
import SelectLanguage from './selectLanguage';
import { useTranslation } from '../i18n';
import Nav from './nav';

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-8 sm:px-10 lg:px-12">
          <div className="flex flex-1 items-center justify-between">
            <Nav />
          </div>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-left p-10">
        {/* <Image
              src="/woman-shrugging.svg"
              alt="Logo"
              // className="dark:invert"
              width={200}
              height={1}
              priority
            /> */}
        <div className="z-10 max-w-5xl w-full flex-col items-center justify-between text-sm lg:flex">
          <div className="flex flex-col align-center justify-center md:flex-row pt-20 pb-20 md:pb-36 ">
            <div className="w-72 self-center">
              <SelectLanguage lng={lng} />
            </div>

            <div className="w-72 h-28 text-gray-700 text-8xl self-center md:self-end">
              plz 🙏
            </div>
          </div>
          <div className="flex flex-col align-center justify-center text-center">
            <span className="text-3xl py-8 italic">
              &quot;{t('Description/NoLocalization')}&quot;
            </span>

            <p className="text-xl py-2">{t('Description/1')}</p>
            <p className="text-xl py-2">{t('Description/2')}</p>
          </div>
        </div>
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
