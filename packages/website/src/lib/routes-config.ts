// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: 'Getting Started',
    href: 'getting-started',
    items: [{ title: 'Introduction', href: '/introduction' }],
  },
  {
    title: 'Installation',
    href: 'installation',
    items: [
      { title: 'CDN', href: '/cdn' },
      { title: 'React', href: '/react' },
    ],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
