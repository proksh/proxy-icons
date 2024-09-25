import * as React from "react";
import { IconProps } from "./types";

export const ProRhythmLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.25 21V3h-2v18zm11 0V6h-2v15zm-16.5 0V9h-2v12zm11-9v9h-2v-9z"
        />
      </svg>
    );
  },
);

export default ProRhythmLine;
