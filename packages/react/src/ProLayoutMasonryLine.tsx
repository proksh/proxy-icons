import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutMasonryLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v18h20V3zm9 2v8H4V5zm2 6h7v8h-7zm7-2h-7V5h7zM4 19v-4h7v4z"
        />
      </svg>
    );
  },
);

export default ProLayoutMasonryLine;
