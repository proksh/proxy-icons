import icons from '../../icons-json.json';

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
        <div>
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
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-wrap gap-1">
          {Object.keys(icons).map((iconName) => {
            if (iconName.endsWith('-line')) {
              return (
                <div
                  key={iconName}
                  className="h-12 w-12 flex items-center justify-center border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all"
                >
                  <i className={'text-xl pro-' + iconName} />
                </div>
              );
            }
          })}
        </div>
        <div className="flex flex-wrap gap-1">
          {Object.keys(icons).map((iconName) => {
            if (iconName.endsWith('-fill')) {
              return (
                <div
                  key={iconName}
                  className="h-12 w-12 flex items-center justify-center border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all"
                >
                  <i className={'text-xl pro-' + iconName} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
