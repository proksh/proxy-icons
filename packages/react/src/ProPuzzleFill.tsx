import * as React from "react";
import { IconProps } from "./types";

export const ProPuzzleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 1a4 4 0 0 0-4 4H3v16h16v-4a4 4 0 0 0 0-8V5h-4a4 4 0 0 0-4-4"
        />
      </svg>
    );
  },
);

export default ProPuzzleFill;
