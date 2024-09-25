import * as React from "react";
import { IconProps } from "./types";

export const ProAdvertisementLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M16.5 8h2v8h-3a3 3 0 1 1 0-6h1zm-1 4a1 1 0 1 0 0 2h1v-2zM4.78 16h2.107l.334-1h2.558l.334 1h2.108L9.554 8H7.446zm3.72-4.838L9.113 13H7.887z"
        />
        <path fill={color} d="M22 3H2v18h20zM4 19V5h16v14z" />
      </svg>
    );
  },
);

export default ProAdvertisementLine;
