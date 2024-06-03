import * as React from "react";
import { IconProps } from "./types";

export const ProFullscreenExitLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 3v4H2v2h6V3zm0 18v-4H2v-2h6v6zm12-4v4h-2v-6h6v2zm0-14v4h4v2h-6V3z"
        />
      </svg>
    );
  },
);

export default ProFullscreenExitLine;
