import * as React from "react";
import { IconProps } from "./types";

export const ProContactsBook2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-1 5a2 2 0 0 0-2 2v1h6v-1a2 2 0 0 0-2-2z"
        />
        <path
          fill={color}
          d="M3 5a3 3 0 0 1 3-3h15v20H6a3 3 0 0 1-3-3zm2 14a1 1 0 0 0 1 1h13v-2H6a1 1 0 0 0-1 1m14-3H6c-.35 0-.687.06-1 .17V5a1 1 0 0 1 1-1h13z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProContactsBook2Line;
