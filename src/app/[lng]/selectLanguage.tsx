'use client';

import { useRouter } from 'next/navigation';

const SelectLanguage = ({ lng }: { lng: string }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <label
        htmlFor="Language"
        className="block text-xs font-medium text-gray-500"
      >
        Please select a language for you
      </label>

      <select
        name="Language"
        id="Language"
        value={lng}
        className="mt-1.5 w-48 h-36 rounded-lg border-gray-300 text-gray-700 text-9xl font-semibold"
        onChange={(e) => router.push(`/${e.target.value}`)}
      >
        <option value="kr">KR</option>
        <option value="en">EN</option>
        <option value="jp">JP</option>
        <option value="cn">CN</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
