import IconComponent from '@/components/homepage/IconComponent';
import icons from '../../icons-json.json';
import SearchInput from '@/components/homepage/SearchInput';
import { filtedFlattenIcons } from '@/components/common/helperFunctions';
import { IconArrayItemType } from '@/components/common/types';
import Header from '@/components/common/header';

export default function Home({ searchParams }: { searchParams: { search?: string } }) {
  if (!icons) {
    return null;
  }

  const responseIcons = filtedFlattenIcons(icons, searchParams.search || '');

  return (
    <main>
      <Header />
      <div className="px-4 sm:px-10 md:px-16 max-w-[1400px] mx-auto">
        <h3 className="text-6xl sm:text-8xl font-bold text-center pt-40 md:pt-56 pb-8 sm:pb-14 tracking-tighter">
          Minimal, clean icons.
        </h3>
        <div className="flex gap-6 mb-16">
          <div className="flex-grow">
            <SearchInput />
          </div>
          <a
            href="https://github.com/proksh/proxy-icons/raw/refs/heads/main/packages/downloads/font.zip"
            download
            rel="noopener noreferrer"
            className="text-xl font-medium bg-orange-500 hover:bg-orange-500/80 flex items-center justify-center gap-3 w-16 md:w-auto md:px-12 rounded-2xl text-white transition-all"
          >
            <i className="pro-download-2-fill leading-none" />
            <span className="hidden md:inline">Download</span>
          </a>
        </div>
        <div className="pb-40">
          {Object.keys(responseIcons).map((category) => {
            const categoryIcons = responseIcons[category];
            return <CategoryIcons key={category} icons={categoryIcons} categoryName={category} />;
          })}
        </div>
      </div>
    </main>
  );
}

function CategoryIcons({ icons, categoryName }: { icons: IconArrayItemType[]; categoryName: string }) {
  if (icons.length === 0) {
    return null;
  }

  return (
    <div className="mb-24">
      <div className="flex gap-2 mb-12 flex-wrap">
        <p className="text-2xl font-semibold tracking-tighter text-brand-600">{categoryName}</p>
        <div className="bg-gray-100 px-3 py-1 font-semibold text-base rounded-3xl text-gray-400">
          {icons.length} Icons
        </div>
      </div>
      <div className="flex sm:hidden flex-wrap gap-6 px-2">
        {icons.map((icon: IconArrayItemType) => {
          return <IconComponent icon={icon} key={icon.iconName} className="text-md" />;
        })}
      </div>
      <div className="hidden sm:grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-14 xl:gap-[136px] items-start justify-between">
        <div className="flex flex-wrap gap-6 px-2">
          {icons.map((icon: IconArrayItemType) => {
            if (icon.iconName.endsWith('-line')) {
              return <IconComponent icon={icon} key={icon.iconName} />;
            }
          })}
        </div>
        <div className="flex flex-wrap gap-6 px-2">
          {icons.map((icon: IconArrayItemType) => {
            if (icon.iconName.endsWith('-fill')) {
              return <IconComponent icon={icon} key={icon.iconName} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
