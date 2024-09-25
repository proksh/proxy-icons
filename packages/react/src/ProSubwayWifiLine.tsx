import * as React from "react";
import { IconProps } from "./types";

export const ProSubwayWifiLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-1.63-.784A4.14 4.14 0 0 0 18.433 3.5 4.14 4.14 0 0 0 15.5 4.715l1.06 1.061A2.64 2.64 0 0 1 18.436 5c.731 0 1.394.297 1.874.776zm-1.6 1.598a1.88 1.88 0 0 0-1.335-.553c-.522 0-.994.212-1.336.553l1.336 1.336zM7.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill={color}
          d="M13 3H7a4 4 0 0 0-4 4v13h3.586l-2 2h14.828l-2-2H21v-9h-8zM5 7a2 2 0 0 1 2-2h4v6H5zm0 11v-5h14v5z"
        />
      </svg>
    );
  },
);

export default ProSubwayWifiLine;
