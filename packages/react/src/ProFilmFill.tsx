import * as React from "react";
import { IconProps } from "./types";

export const ProFilmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v18H2zm4 2H4v2h2zm0 4H4v2h2zm0 4H4v2h2zm0 4H4v2h2zm12 2h2v-2h-2zm0-4h2v-2h-2zm0-4h2V9h-2zm0-4h2V5h-2z"
        />
      </svg>
    );
  },
);

export default ProFilmFill;
