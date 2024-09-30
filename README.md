# Proxy Icons

[![npm version](https://img.shields.io/npm/v/proxy-icons.svg?style=flat-square)](https://www.npmjs.com/package/proxy-icons)

Easily integrate these icons into your application by using Font cdn or React components to enhance user experience.

## Installation with CDN

1. **Add CDN Link**: To integrate Proxy Icons into your project, copy the following CDN link and paste it within the `<head>` tag of your HTML document:

   ```html
   <link href="https://raw.githubusercontent.com/proksh/proxy-icons/blob/main/packages/font/pro.css" rel="stylesheet" />
   ```

   Alternatively, you can download the <a href="#">proxy-icons.css</a> file and include it in the `<head>` tag of your HTML document.

2. **Use Icons**: To use an icon, add an `<i>` tag with the appropriate class name. The class name follows the convention: `pro-{name}-{style}`.

   ```html
   <i class="pro-user-line"></i> <i class="pro-user-fill"></i>
   ```

   Note: Replace `{name}` with the icon name and `{style}` with the desired style (e.g., line for outlined icons or fill for filled icons).

3. **Sizing**: You can resize Proxy Icons using inline styles or predefined classes. For example:

   ```html
   <i class="pro-user-line" style="font-size: 12px;"></i>
   ```

   If you're using a CSS framework like Tailwind CSS or Bootstrap, you can apply their text sizing classes directly:

   ```html
   <i class="pro-user-line text-xs"></i>
   <i class="pro-user-line text-sm"></i>
   <i class="pro-user-line text-lg"></i>
   ```

## Installation with npm

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

Note: Replace `ProUserFill` with the specific icon component you need from the Proxy Icons package.

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

**Note**: Adapt the sizing approach based on your chosen CSS framework or design system.

## Additional Notes

- Import Only Needed Icons: Only import the icons you need to keep your bundle size optimized.
- Custom Styles: Further customize the icons with CSS classes or inline styles as needed.
- Responsive Sizing: Consider using responsive classes or media queries to adjust icon sizes based on screen size.

## Live Demo

[https://proxy-icons-website.vercel.app/](https://proxy-icons-website.vercel.app/)
