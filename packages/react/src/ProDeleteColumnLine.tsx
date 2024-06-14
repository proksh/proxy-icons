import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteColumnLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h8v18H2zm2 2v14h4V5zm16 11h-6v-2h6z" />
        <path
          fill={color}
          d="M17 9a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        />
      </svg>
    );
  },
);

export default ProDeleteColumnLine;
