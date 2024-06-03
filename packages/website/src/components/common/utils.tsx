import { type ClassValue, clsx } from 'clsx';
import { createTailwindMerge, getDefaultConfig, validators } from 'tailwind-merge';

export const twMerge = createTailwindMerge(() => {
  const config = getDefaultConfig();
  return {
    ...config,
    classGroups: {
      ...config.classGroups,
      'font-size': [{ text: [validators.isNumber, validators.isArbitraryLength] }],
    },
  };
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
