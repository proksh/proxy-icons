import * as React from "react";
import { IconProps } from "./types";

export const ProScreenshotLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path fill={color} d="m3 4 1-1h16l1 1v9h-2V5H5v8H3z" />
        <path
          fill={color}
          d="M14.968 14.554a4 4 0 1 1-1.414 1.414L12 14.414l-1.554 1.554a4 4 0 1 1-1.414-1.414L10.586 13 6.293 8.707l1.414-1.414L12 11.586l4.293-4.293 1.414 1.414L13.414 13zM17 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
        />
      </svg>
    );
  },
);

export default ProScreenshotLine;
