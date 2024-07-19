import React, { PropsWithChildren, cache } from 'react';
// import Pagination from '@/components/pagination';
import { getMarkdownForSlug } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import DocsBreadcrumb from '@/components/docs/docs-breadcrumb';
import Header from '@/components/common/header';
import Toc from '@/components/docs/Toc';

type PageProps = {
  params: { slug: string[] };
};

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

export default async function page({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join('/');
  const res = await cachedGetMarkdownForSlug(pathName);

  if (!res) notFound();

  return (
    <div className="flex items-start gap-24">
      <div className="flex-[3] pb-10 pt-32">
        <DocsBreadcrumb paths={slug} />
        <Markdown>
          <h1 className="text-6xl font-bold tracking-tighter text-orange-500 mb-3">{res.frontmatter.title}</h1>
          <p className="text-gray-800 text-lg mb-8">{res.frontmatter.description}</p>
          <div className="flex flex-col gap-5 text-lg">{res.content}</div>
          {/* <Pagination pathname={pathName} /> */}
        </Markdown>
      </div>
      <Toc path={pathName} />
    </div>
  );
}

function Markdown({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-zinc dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800 prose-code:p-1 prose-code:rounded-md prose-pre:border pt-2 col-span-3">
      {children}
    </div>
  );
}
