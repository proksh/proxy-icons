import * as React from "react";
import { IconProps } from "./types";

export const ProAdvertisementFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.5 12h1v2h-1a1 1 0 1 1 0-2m-7-.838L9.113 13H7.887z"
        />
        <path
          fill={color}
          d="M2 3h20v18H2zm14.5 5v2h-1a3 3 0 0 0 0 6h3V8zM4.78 16h2.107l.334-1h2.558l.334 1h2.108L9.554 8H7.446z"
        />
      </svg>
    );
  },
);

export default ProAdvertisementFill;
