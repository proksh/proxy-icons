import { ROUTES } from '@/lib/routes-config';
import Anchor from './anchor';
import { ScrollArea } from '@/components/common/scroll-area';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/common/sheet';
import { FooterButtons } from './footer';
import { Button } from '../common/button';

export function Leftbar() {
  return (
    <aside className="md:flex hidden min-w-[230px] w-[230px] sticky top-0 flex-col h-screen overflow-y-auto">
      <ScrollArea>
        <Menu />
      </ScrollArea>
    </aside>
  );
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <i className="pro-align-left-line" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            {/* <Logo /> */}
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 mt-3 mx-2 px-5">{/* <NavMenu isSheet /> */}</div>
          <div className="mx-2 px-5">
            <Menu isSheet />
          </div>
          <div className="p-6 pb-4 flex gap-2">
            <FooterButtons />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

function Menu({ isSheet = false }) {
  return (
    <div className="pb-4 pt-24">
      {ROUTES.map(({ href, items, title }) => {
        return (
          <div className="flex flex-col gap-3 mt-8" key={href}>
            <h4 className="font-medium text-xs px-3 text-gray-400">{title}</h4>
            <div className="flex flex-col gap-1 sm:text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">
              {items.map((subItem) => {
                const key = `/docs/${href}${subItem.href}`;
                const Comp = (
                  <Anchor
                    activeClassName="text-orange-500 bg-orange-100 hover:bg-orange-100"
                    className="text-gray-900 text-lg py-1 px-3 font-medium rounded-full hover:bg-orange-50 transition-colors"
                    key={key}
                    href={key}
                  >
                    {subItem.title}
                  </Anchor>
                );
                return isSheet ? (
                  <SheetClose key={key} asChild>
                    {Comp}
                  </SheetClose>
                ) : (
                  Comp
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
