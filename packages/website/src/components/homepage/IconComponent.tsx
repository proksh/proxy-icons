'use client';

import _ from 'lodash';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/common/dialog';
import { saveAs } from 'file-saver';
import { IconArrayItemType } from '../common/types';
import { useState } from 'react';
import { cn } from '../common/utils';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '../common/tabs';

export default function IconComponent({ icon, className }: { icon: IconArrayItemType; className?: string }) {
  const handleSvgDownload = () => {
    const svgBlob = new Blob([icon.svgContent], { type: 'image/svg+xml' });
    saveAs(svgBlob, `${icon.iconName}.svg`);
  };

  const handlePngDownload = () => {
    const svgBlob = new Blob([icon.svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        blob && saveAs(blob, `${icon.iconName}.png`);
        URL.revokeObjectURL(url);
      }, 'image/png');
    };
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={cn(
            'size-10 -m-2 flex items-center justify-center relative rounded-2xl hover:bg-gray-100 transition-all',
            className
          )}
        >
          {icon.labels.some((label) => label.toLowerCase().includes('new')) && (
            <div className="bg-green-500 absolute top-0.5 right-0.5 h-2 w-2 rounded-2xl transition-all border border-white shadow-md" />
          )}
          <i className={'text-2xl md:text-2xl leading-none pro-' + icon.iconName} />
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col">
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="w-20">
            <div className="aspect-square flex items-center justify-center border border-gray-300 rounded-2xl">
              <i className={'text-3xl pro-' + icon.iconName} />
            </div>
          </div>
          <div className="flex-grow">
            <DialogTitle className="mb-2 flex gap-2 items-center">
              <p>pro-{icon.iconName}</p>
              <CopyIconButton copyText={`pro-${icon.iconName}`} />
            </DialogTitle>
            <div className="flex gap-2">
              <CopyButton copyText={icon.svgContent} text="Copy SVG" successText="Copied" />
              <button
                onClick={handleSvgDownload}
                className="text-md flex items-center font-medium bg-orange-500 hover:bg-orange-500/80 transition-all gap-1 px-3 py-2 rounded-xl text-white"
              >
                <i className="pro-download-2-fill leading-none" />
                SVG
              </button>
              <button
                onClick={handlePngDownload}
                className="text-md flex items-center font-medium bg-orange-500 hover:bg-orange-500/80 transition-all gap-1 px-3 py-2 rounded-xl text-white"
              >
                <i className="pro-download-2-fill leading-none" />
                PNG
              </button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="font">
          <TabsList className="border-b border-gray-100 mb-4 p-0 w-full items-start h-auto">
            <TabsTrigger value="font">Font</TabsTrigger>
            <TabsTrigger value="svg">SVG</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
          </TabsList>
          <TabsContent value="font">
            <div className="flex flex-col gap-2">
              <div className="relative w-full">
                <pre className="font-mono relative text-xs font-medium overflow-auto w-full bg-gray-100 rounded-xl !p-4 text-gray-700">
                  {`<i class="pro-${icon.iconName}"></i>`}
                </pre>
                <div className="absolute top-2 right-2">
                  <CopyIconButton copyText={`<i class="pro-${icon.iconName}"></i>`} />
                </div>
              </div>
              <div className="relative w-full">
                <pre className="font-mono relative text-xs font-medium overflow-auto w-full bg-gray-100 rounded-xl !p-4 text-gray-700">
                  {`<i className="pro-${icon.iconName}" />`}
                </pre>
                <div className="absolute top-2 right-2">
                  <CopyIconButton copyText={`<i className="pro-${icon.iconName}" />`} />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="svg">
            <div className="flex flex-col gap-2">
              <div className="relative w-full">
                <pre className="font-mono text-xs font-medium overflow-auto w-full bg-gray-100 rounded-xl !p-4 text-gray-700">
                  {icon.svgContent}
                </pre>
                <div className="absolute top-2 right-2">
                  <CopyIconButton copyText={icon.svgContent} />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="react">
            <div className="flex flex-col gap-2">
              <div className="relative w-full">
                <pre className="font-mono text-xs relative font-medium overflow-auto w-full bg-gray-100 rounded-xl !p-4 text-gray-700">
                  {`<Pro${_.upperCase(icon.iconName.substring(0, 1))}${_.camelCase(icon.iconName.substring(1))} className="size-6" />`}
                </pre>
                <div className="absolute top-2 right-2">
                  <CopyIconButton
                    copyText={`<Pro${_.upperCase(icon.iconName.substring(0, 1))}${_.camelCase(icon.iconName.substring(1))} className="size-6" />`}
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

const CopyButton = ({ text, successText, copyText }: { text?: string; successText?: string; copyText: string }) => {
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
      <button className="text-md flex items-center font-medium bg-green-500 hover:bg-green-500/80 transition-all gap-1 px-3 py-2 rounded-xl text-white">
        <i className="pro-check-line leading-none" />
        {successText}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopyClick}
      className="text-md flex items-center font-medium bg-orange-500 hover:bg-orange-500/80 transition-all gap-1 px-3 py-2 rounded-xl text-white"
    >
      {text ? text : <i className="pro-file-copy-line leading-none" />}
    </button>
  );
};

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
      <button className="text-base flex items-center justify-center bg-green-500 hover:bg-green-500/80 transition-all rounded-md text-white size-8">
        <i className="pro-check-line leading-none" />
      </button>
    );
  }

  return (
    <button
      onClick={handleCopyClick}
      className="text-base flex items-center justify-center bg-white border border-gray-200 transition-all rounded-md size-8"
    >
      <i className="pro-file-copy-line leading-none" />
    </button>
  );
};
