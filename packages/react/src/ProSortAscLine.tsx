import * as React from "react";
import { IconProps } from "./types";

export const ProSortAscLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m19 3.086 4.207 4.207-1.414 1.414L20 6.914V20h-2V6.914l-1.793 1.793-1.414-1.414zM12 4H3v2h9zm-9 7h11v2H3zm11 7H3v2h11z"
        />
      </svg>
    );
  },
);

export default ProSortAscLine;
