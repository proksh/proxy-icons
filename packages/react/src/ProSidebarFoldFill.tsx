import * as React from "react";
import { IconProps } from "./types";

export const ProSidebarFoldFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h10v18H3l-1-1zm7 5.5L6 12l3 2.5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path fill={color} d="M15 3h5l1 1v16l-1 1h-5z" />
      </svg>
    );
  },
);

export default ProSidebarFoldFill;
