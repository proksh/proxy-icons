import * as React from "react";
import { IconProps } from "./types";

export const ProGridLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 21V3H3v18zm-11-2v-3h4v3zm-2 0H5v-3h3zm2-5v-4h4v4zm-2-4v4H5v-4zm2-2V5h4v3zM8 5v3H5V5zm11 14h-3v-3h3zm0-5h-3v-4h3zm0-6h-3V5h3z"
        />
      </svg>
    );
  },
);

export default ProGridLine;
