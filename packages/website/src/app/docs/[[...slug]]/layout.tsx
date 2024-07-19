import Header from '@/components/common/header';
import { Leftbar } from '@/components/docs/leftbar';

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-32 max-w-[1440px] mx-auto px-5">
      <Header />
      <Leftbar />
      <div className="flex-[4]">{children}</div>{' '}
    </div>
  );
}
