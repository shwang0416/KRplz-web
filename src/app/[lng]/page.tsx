// import Image from 'next/image';
import SelectLanguage from '../selectLanguage';
import { useTranslation } from '../i18n';

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
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Get the App
                  </a>
                </li>
              </ul>
            </nav>
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
          <div className="flex flex-row gap-10 pt-20 pb-36">
            <SelectLanguage lng={lng} />
            <div className="w-72 h-28 text-gray-700 sm:text-8xl self-end">
              plz 🙏
            </div>
          </div>
          <span className="text-3xl py-8 italic">
            &quot;{t('Description/NoLocalization')}&quot;
          </span>

          <p className="text-xl py-2">{t('Description/1')}</p>
          <p className="text-xl py-2">{t('Description/2')}</p>
        </div>
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
