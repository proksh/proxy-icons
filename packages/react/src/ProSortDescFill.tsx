import * as React from "react";
import { IconProps } from "./types";

export const ProSortDescFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3.75h11v2.5H3zM22.5 15H20V4h-2v11h-2.5l-.707 1.707 3.5 3.5h1.414l3.5-3.5zM14 10.75H3v2.5h11zm-2 7H3v2.5h9z"
        />
      </svg>
    );
  },
);

export default ProSortDescFill;
