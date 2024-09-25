import * as React from "react";
import { IconProps } from "./types";

export const ProRainbowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 7a8 8 0 0 0-8 8v5H1v-5C1 8.925 5.925 4 12 4s11 4.925 11 11v5h-3v-5a8 8 0 0 0-8-8"
        />
        <path fill={color} d="M9 15v5h6v-5a3 3 0 1 0-6 0" />
        <path fill={color} d="M8 15a4 4 0 0 1 8 0v5h3v-5a7 7 0 1 0-14 0v5h3z" />
      </svg>
    );
  },
);

export default ProRainbowFill;
