import * as React from "react";
import { IconProps } from "./types";

export const ProContactsBook2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 5a3 3 0 0 1 3-3h15v20H6a3 3 0 0 1-3-3zm3 13a1 1 0 1 0 0 2h13v-2zm4-10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-1 5v1h6v-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2"
        />
      </svg>
    );
  },
);

export default ProContactsBook2Fill;
