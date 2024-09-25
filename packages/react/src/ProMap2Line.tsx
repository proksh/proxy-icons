import * as React from "react";
import { IconProps } from "./types";

export const ProMap2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9.038 1.9 6 3L22 2v17.167l-7.038 2.932-6-3L2 22V4.833zM8 4.5 4 6.167V19l4-1.667zm2 12.882 4 2V6.618l-4-2zm6-10.715V19.5l4-1.667V5z"
        />
      </svg>
    );
  },
);

export default ProMap2Line;
