import * as React from "react";
import { IconProps } from "./types";

export const ProTableLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 21V3h20v18zm12-2v-9h-4v9zm2 0h4v-9h-4zm-8-9H4v9h4zm12-2V5H4v3z"
        />
      </svg>
    );
  },
);

export default ProTableLine;
