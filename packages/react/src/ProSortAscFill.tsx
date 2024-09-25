import * as React from "react";
import { IconProps } from "./types";

export const ProSortAscFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3.75H3v2.5h9zm2.793 3.543 3.5-3.5h1.414l3.5 3.5L22.5 9H20v11h-2V9h-2.5zM3 10.75h11v2.5H3zm11 7H3v2.5h11z"
        />
      </svg>
    );
  },
);

export default ProSortAscFill;
