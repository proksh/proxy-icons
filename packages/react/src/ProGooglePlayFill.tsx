import * as React from "react";
import { IconProps } from "./types";

export const ProGooglePlayFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M3.61 1.814 13.793 12 3.611 22.186a1 1 0 0 1-.61-.92V2.735a1 1 0 0 1 .609-.921M14.5 12.707l2.302 2.302-10.937 6.333zm3.199-3.198 2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.207 12zM5.865 2.658 16.803 8.99 14.5 11.293z"
        />
      </svg>
    );
  },
);

export default ProGooglePlayFill;
