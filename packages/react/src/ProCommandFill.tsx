import * as React from "react";
import { IconProps } from "./types";

export const ProCommandFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5 5.5a1 1 0 0 0 0 2h1v-1a1 1 0 0 0-1-1m4 2h3v-1a4 4 0 1 1 4 4h-1v3h1a4 4 0 1 1-4 4v-1h-3v1a4 4 0 1 1-4-4h1v-3h-1a4 4 0 1 1 4-4zm0 3v3h3v-3zm6-3h1a1 1 0 1 0-1-1zm0 9v1a1 1 0 1 0 1-1zm-9 0h-1a1 1 0 1 0 1 1z"
        />
      </svg>
    );
  },
);

export default ProCommandFill;
