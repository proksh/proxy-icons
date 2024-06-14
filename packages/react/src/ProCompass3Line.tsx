import * as React from "react";
import { IconProps } from "./types";

export const ProCompass3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.596 7.404 14.12 14.12l-6.717 2.475L9.878 9.88zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        />
        <path
          fill={color}
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
        />
      </svg>
    );
  },
);

export default ProCompass3Line;
