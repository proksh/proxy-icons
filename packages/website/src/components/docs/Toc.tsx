import { getTocs } from '@/lib/markdown';
import TocObserver from './toc-observer';
import { ScrollArea } from '@/components/common/scroll-area';

export default async function Toc({ path }: { path: string }) {
  const tocs = await getTocs(path);

  return (
    <div className="lg:flex hidden toc flex-[1] min-w-[230px] py-8 sticky top-0 h-screen">
      <div className="flex flex-col gap-2.5 w-full">
        <ScrollArea>
          <div className="pb-4 pt-24">
            <h3 className="font-medium text-xs text-gray-400 mb-3">On this page</h3>
            <TocObserver data={tocs} />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
