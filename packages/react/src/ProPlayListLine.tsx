import * as React from "react";
import { IconProps } from "./types";

export const ProPlayListLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 6h20V4H2zm17 3v6.17A3 3 0 1 0 21 18v-7h3V9zm-1 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-3-4H2v-2h13zM2 20h10v-2H2z"
        />
      </svg>
    );
  },
);

export default ProPlayListLine;
