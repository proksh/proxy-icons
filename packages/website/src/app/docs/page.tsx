import React, { PropsWithChildren, cache } from 'react';
// import Pagination from '@/components/pagination';
import { getMarkdownForSlug } from '@/lib/markdown';

type PageProps = {
  params: { slug: string[] };
};

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

export default async function page({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join('/');
  const res = await cachedGetMarkdownForSlug(pathName);

  return (
    <div className="flex items-start gap-12">
      <div className="flex-[3] py-10">
        {/* <DocsBreadcrumb paths={slug} /> */}
        <Markdown>
          <h1>{res.frontmatter.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">{res.frontmatter.description}</p>
          <div>{res.content}</div>
          {/* <Pagination pathname={pathName} /> */}
        </Markdown>
      </div>
      {/* <Toc path={pathName} /> */}
    </div>
  );
}

function Markdown({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-zinc dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800 prose-code:p-1 prose-code:rounded-md prose-pre:border pt-2">
      {children}
    </div>
  );
}
