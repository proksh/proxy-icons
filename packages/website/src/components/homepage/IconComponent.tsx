'use client';

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/common/dialog';
import { saveAs } from 'file-saver';

export default function IconComponent({ iconName, svgContent }: { iconName: string; svgContent: string }) {
  const handleSvgDownload = () => {
    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
    saveAs(svgBlob, `${iconName}.svg`);
  };

  const handlePngDownload = () => {
    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
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
        blob && saveAs(blob, `${iconName}.png`);
        URL.revokeObjectURL(url);
      }, 'image/png');
    };
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="h-9 w-9 flex items-center justify-center rounded-2xl hover:bg-gray-50 transition-all">
          <i className={'text-2xl pro-' + iconName} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex gap-4">
          <div className="w-20">
            <div className="aspect-square flex items-center justify-center border border-gray-300 rounded-2xl">
              <i className={'text-3xl pro-' + iconName} />
            </div>
          </div>
          <div className="flex-grow">
            <DialogTitle className="mb-4">{iconName}</DialogTitle>
            <div className="flex gap-2">
              <button className="text-md font-medium bg-orange-500 gap-3 px-3 py-2 rounded-xl text-white">
                Copy SVG
              </button>
              <button
                onClick={handleSvgDownload}
                className="text-md font-medium bg-orange-500 gap-3 px-3 py-2 rounded-xl text-white"
              >
                SVG
              </button>
              <button
                onClick={handlePngDownload}
                className="text-md font-medium bg-orange-500 gap-3 px-3 py-2 rounded-xl text-white"
              >
                PNG
              </button>
            </div>
          </div>
        </div>
        <pre className="font-mono text-sm overflow-auto w-full bg-gray-100 rounded-xl p-4 text-gray-700">
          {`<i class="pro-${iconName}"></i>`}
        </pre>
      </DialogContent>
    </Dialog>
  );
}
