'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { ChangeEvent, useCallback } from 'react';

export default function SearchInput() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    router.push(pathname + '?' + createQueryString('search', e.target.value));
  };

  const inputValue = searchParams.get('search') || '';

  return (
    <div className="relative">
      <i className="pro-search-line absolute top-1/2 left-5 transform -translate-y-1/2 text-xl pointer-events-none" />
      <input
        defaultValue={inputValue}
        onChange={handleChange}
        placeholder="Search icon"
        className="border border-black/10 bg-brand-100 rounded-2xl text-xl py-4 pl-14 pr-4 w-full outline-none ring-4 ring-transparent focus-within:border-black/20 focus-within:border-brand-600 focus-within:ring-brand-600/20 transition-all"
      />
    </div>
  );
}
