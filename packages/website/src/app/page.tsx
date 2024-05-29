'use client';
import Image from 'next/image';

import icons from '../../icons-json.json';

export default function Home() {
  // Object.keys(icons).map((item) => {
  //   console.log(item);
  // });

  if (!icons) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Proxy Icons</h3>
      {Object.keys(icons).map((category) => {
        const categoryIcons = (icons && icons[category]) as any;
        return (
          categoryIcons &&
          Object.keys(categoryIcons).map((iconName) => {
            return <i className={'pro-' + iconName} />;
          })
        );
      })}
      <i className="pro-arrow-turn-forward-line text-2xl" />
    </main>
  );
}
