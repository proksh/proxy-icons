import * as React from "react";
import { IconProps } from "./types";

export const ProMarkupLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10l-.183-.002C6.378 21.901 2 17.462 2 12m10-8a8 8 0 0 0-5.466 13.841l1.506-5.123L9 12h1v-1.5l1.05-3.777a.987.987 0 0 1 1.9 0L14 10.5V12h1l.96.718 1.506 5.123A8 8 0 0 0 12 4M8.256 19.072a7.96 7.96 0 0 0 3.718.928H12q.207 0 .412-.01a8 8 0 0 0 3.331-.918L14.252 14H9.748z"
        />
      </svg>
    );
  },
);

export default ProMarkupLine;
