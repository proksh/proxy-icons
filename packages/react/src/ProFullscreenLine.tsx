import * as React from "react";
import { IconProps } from "./types";

export const ProFullscreenLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 9V5h4V3H2v6zm0 6v4h4v2H2v-6zm16 4v-4h2v6h-6v-2zm0-10V5h-4V3h6v6z"
        />
      </svg>
    );
  },
);

export default ProFullscreenLine;
