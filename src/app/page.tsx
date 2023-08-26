// import Image from 'next/image';
import SelectLanguage from './selectLanguage';

export default function Home() {
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
            <SelectLanguage />
            <div className="w-72 h-28 text-gray-700 sm:text-8xl self-end">
              plz 🙏
            </div>
          </div>
          <span className="text-3xl py-8 italic">
            &quot;존버해도 한국어 정발은 나오지 않습니다&quot;
          </span>

          <span className="text-xl py-2">MAC용 이미지 스트리밍 번역 툴</span>
          <span className="text-xl py-2">
            게임의 외국어를 실시간으로 편하게 번역해 플레이하세요
          </span>
        </div>
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
