'use client';

import React, { ReactNode, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/common/dialog';
import icons from '../../../icons-json.json';

export default function DownloadModal({ children }: { children: ReactNode }) {
  const totalIcons = Object.values(icons).reduce((agg: number, val: any) => {
    return Object.keys(val).length + agg;
  }, 0);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col">
        <DialogTitle className="mb-5">Download Icons</DialogTitle>
        <div className="flex gap-4">
          <div className="size-12 shrink-0 flex text-center items-center justify-center border border-gray-300 rounded-xl">
            <i className="pro-folder-image-line text-lg" />
          </div>
          <div className="flex-grow">
            <p className="font-medium">Icon pack</p>
            <p className="text-gray-400 text-sm">Contains all {totalIcons} .svgs icons</p>
          </div>
          <a
            href="https://github.com/proksh/proxy-icons/raw/refs/heads/main/packages/downloads/icons.zip"
            download
            rel="noopener noreferrer"
            className="text-xl shrink-0 font-medium bg-orange-500 hover:bg-orange-500/80 flex items-center justify-center gap-3 size-10 rounded-2xl text-white transition-all"
          >
            <i className="pro-download-2-fill leading-none" />
          </a>
        </div>
        <div className="h-1 border-b border-gray-200" />
        <div className="flex gap-4">
          <div className="size-12 shrink-0 flex text-center items-center justify-center border border-gray-300 rounded-xl">
            <i className="pro-font-size-2-fill text-lg" />
          </div>
          <div className="flex-grow">
            <p className="font-medium">Icon fonts</p>
            <p className="text-gray-400 text-sm">
              Contain .css / .less / .eot / .ttf / .woff / .woff2 / svg-sprite files
            </p>
          </div>
          <a
            href="https://github.com/proksh/proxy-icons/raw/refs/heads/main/packages/downloads/font.zip"
            download
            rel="noopener noreferrer"
            className="text-xl shrink-0 font-medium bg-orange-500 hover:bg-orange-500/80 flex items-center justify-center gap-3 size-10 rounded-2xl text-white transition-all"
          >
            <i className="pro-download-2-fill leading-none" />
          </a>
        </div>
        <div className="h-1 border-b border-gray-200" />
        <div className="flex gap-4">
          <div className="size-12 shrink-0 flex text-center items-center justify-center border border-gray-300 rounded-xl">
            <i className="pro-code-line text-lg" />
          </div>
          <div className="flex-grow">
            <p className="font-medium">Npm Package</p>
            <p className="text-gray-400 text-sm">npm install proxyicons --save</p>
          </div>
          <CopyIconButton copyText="npm install proxyicons --save" />
        </div>
        {/* <div className="h-1 border-b border-gray-200" />
        <div className="flex gap-4">
          <div className="size-12 flex text-center items-center justify-center border border-gray-300 rounded-xl">
            <i className="pro-file-code-line text-lg" />
          </div>
          <div className="flex-grow">
            <p className="font-medium">Figma File</p>
            <p className="text-gray-400 text-sm">Contains all the icons in Figma file</p>
          </div>
          <a
            rel="noopener noreferrer"
            className="text-xl font-medium bg-orange-500 hover:bg-orange-500/80 flex items-center justify-center gap-3 size-10 rounded-2xl text-white transition-all"
          >
            <i className="pro-external-link-fill leading-none" />
          </a>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}

const CopyIconButton = ({ copyText }: { copyText: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (copied) {
    return (
      <button className="text-base shrink-0 flex items-center justify-center bg-green-500 hover:bg-green-500/80 transition-all text-white size-10 rounded-xl">
        <i className="pro-check-line leading-none" />
      </button>
    );
  }

  return (
    <button
      onClick={handleCopyClick}
      className="text-base shrink-0 flex items-center justify-center bg-white border border-gray-200 transition-all size-10 rounded-xl"
    >
      <i className="pro-file-copy-line leading-none" />
    </button>
  );
};
