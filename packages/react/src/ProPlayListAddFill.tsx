import * as React from "react";
import { IconProps } from "./types";

export const ProPlayListAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3.5h20v3H2zM18 20v3h2v-3h3v-2h-3v-3h-2v3h-3v2zM2 17.5h11v3H2zm20-7H2v3h20z"
        />
      </svg>
    );
  },
);

export default ProPlayListAddFill;
