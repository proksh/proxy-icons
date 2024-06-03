import * as React from "react";
import { IconProps } from "./types";

export const ProPlayListAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4h20v2H2zm16 16v3h2v-3h3v-2h-3v-3h-2v3h-3v2zM2 18h11v2H2zm20-7H2v2h20z"
        />
      </svg>
    );
  },
);

export default ProPlayListAddLine;
