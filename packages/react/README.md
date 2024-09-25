# Proxy Icons - React Components for Your Project

[![npm version](https://img.shields.io/npm/v/proxy-icons.svg?style=flat-square)](https://www.npmjs.com/package/proxy-icons)

This library provides a collection of React components for commonly used icons. Easily integrate these icons into your React applications to enhance user experience.

## Installation

Install the Proxy Icons package using your preferred package manager:

```bash
npm install proxy-icons
# or
yarn add proxy-icons
# or
pnpm install proxy-icons
```

## Usage

1. Import the desired icon component:

```javascript
import { ProUserFill } from 'proxy-icons';
```

2. Use the icon component within your React component:

```javascript
const MyComponent = () => {
  return (
    <ProUserFill className="my-icon" /> // Add custom class for styling
  );
};
```

**Note**: Replace `ProUserFill` with the specific icon component you need from the Proxy Icons package.

## Available Icons

[https://proxy-icons-website.vercel.app/](https://proxy-icons-website.vercel.app/)

## Sizing

Apply styles or classes to adjust the size of your icons. Here's an example using Tailwind CSS and inline styles:

```javascript
import { ProUserFill } from 'proxy-icons';

const MyComponent = () => {
  return (
    <>
      {/* Using Tailwind CSS */}
      <ProUserFill className="size-5" />

      {/* Using inline styles */}
      <ProUserFill style={{ height: '20px', width: '20px' }} />
    </>
  );
};
```

Note: Adapt the sizing approach based on your chosen CSS framework or design system.

## Additional Notes

- Import Only Needed Icons: Only import the icons you need to keep your bundle size optimized.
- Custom Styles: Further customize the icons with CSS classes or inline styles as needed.
- Responsive Sizing: Consider using responsive classes or media queries to adjust icon sizes based on screen size.

## Live Demo

[https://proxy-icons-website.vercel.app/](https://proxy-icons-website.vercel.app/)
