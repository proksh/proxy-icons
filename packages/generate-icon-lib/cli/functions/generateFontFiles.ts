import path from 'path';

const options = {
  src: path.resolve(process.cwd(), 'icons'),
  dist: path.resolve(process.cwd(), 'fonts'),
  fontName: 'proxyicons',
  css: true,
  startUnicode: 0xea01,
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
  website: {
    title: 'proxy-icons',
    meta: {
      description: '',
      keywords: 'icons, proxyicons, design system, minimal, clean',
    },
    description: ``,
    corners: {
      url: 'https://github.com/proksh/proxy-icons',
    },
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/proksh/proxy-icons',
      },
      {
        title: 'Font Class',
        url: 'index.html',
      },
      {
        title: 'Unicode',
        url: 'unicode.html',
      },
    ],
    footerInfo: `Licensed under MIT. (Yes it's free and <a href="https://github.com/proksh/proxy-icons">open-sourced</a>`,
  },
};

export async function generateFontFiles() {
  const svgtofont = require('svgtofont');

  await svgtofont(options);
}
