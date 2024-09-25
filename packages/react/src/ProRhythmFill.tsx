import * as React from "react";
import { IconProps } from "./types";

export const ProRhythmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.75 21V3h-3v18zm11 0V6h-3v15zm-16.5 0V9h-3v12zm11-9v9h-3v-9z"
        />
      </svg>
    );
  },
);

export default ProRhythmFill;
