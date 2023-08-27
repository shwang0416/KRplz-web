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
    </>
  );
}
