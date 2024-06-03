'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/dialog';
import icons from '../../icons-json.json';
import { useEffect, useState } from 'react';

export default function Home() {
  if (!icons) {
    return null;
  }

  return (
    <main>
      <div className="px-16 max-w-[1420px] mx-auto">
        <h3 className="text-9xl font-bold text-center pt-56 pb-14 tracking-tighter">Minimal, clean icons.</h3>
        <div className="flex gap-6 mb-14">
          <div className="flex-grow">
            <input
              placeholder="Search icon"
              className="border border-gray-200 rounded-xl text-xl py-4 pl-10 pr-4 w-full"
            />
          </div>
          <button className="text-xl font-medium bg-orange-500 gap-3 px-12 rounded-xl text-white">Download</button>
        </div>
        <div className="pb-40">
          {Object.keys(icons).map((category) => {
            const categoryIcons = (icons && icons[category as keyof typeof icons]) as any;
            return <CategoryIcons key={category} icons={categoryIcons} categoryName={category} />;
          })}
        </div>
      </div>
    </main>
  );
}

function CategoryIcons({ icons, categoryName }: { icons: { [key: string]: any }; categoryName: string }) {
  return (
    <div className="mb-12">
      <p className="mb-6 text-xl">{categoryName}</p>
      <div className="grid grid-cols-1 gap-3">
        <div className="flex flex-wrap gap-1">
          {Object.keys(icons).map((iconName) => {
            if (iconName.endsWith('-line')) {
              return <IconComponent iconName={iconName} key={iconName} />;
            }
          })}
        </div>
        <div className="flex flex-wrap gap-1">
          {Object.keys(icons).map((iconName) => {
            if (iconName.endsWith('-fill')) {
              return <IconComponent iconName={iconName} key={iconName} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

const IconComponent = ({ iconName }: { iconName: string }) => {
  const [svgContent, setSvgContent] = useState('');

  const handleIconLoad = async () => {
    try {
      const svgModule = await import(`../../../icons/${iconName}.svg`);
      const response = await fetch(svgModule.default);
      const svgText = await response.text();
      setSvgContent(svgText);
    } catch (error) {
      console.error('Error loading SVG:', error);
    }
  };

  useEffect(() => {
    handleIconLoad();
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="h-16 w-16 flex items-center justify-center border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all">
          <i className={'text-2xl pro-' + iconName} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex gap-4">
            <div className="w-20">
              <div className="aspect-square flex items-center justify-center border border-gray-200 rounded-2xl">
                <i className={'text-3xl pro-' + iconName} />
              </div>
            </div>
            <div className="flex-grow">
              <DialogTitle className="mb-4">{iconName}</DialogTitle>
              <div className="flex gap-2">
                <button className="text-md font-medium bg-orange-500 gap-3 px-3 py-2 rounded-xl text-white">
                  Copy SVG
                </button>
                <button className="text-md font-medium bg-orange-500 gap-3 px-3 py-2 rounded-xl text-white">SVG</button>
                <button className="text-md font-medium bg-orange-500 gap-3 px-3 py-2 rounded-xl text-white">PNG</button>
              </div>
            </div>
          </div>
          <pre>{svgContent}</pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
