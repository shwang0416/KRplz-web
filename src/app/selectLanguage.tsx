'use client';

import { useState } from 'react';

const SelectLanguage = () => {
  const [lang, setLang] = useState<string>();
  return (
    <div className="flex flex-col">
      <label
        htmlFor="Language"
        className="block text-xs font-medium text-gray-500"
      >
        Select the Language you want to localize
      </label>

      <select
        name="Language"
        id="Language"
        className="mt-1.5 w-60 h-28 rounded-lg border-gray-300 text-gray-700 sm:text-8xl"
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="KR">KR</option>
        <option value="EN">EN</option>
        <option value="JP">JP</option>
        <option value="CN">CN</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
