import * as React from "react";
import { IconProps } from "./types";

export const ProSortDescLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.793 15.293 20 17.086V4h-2v13.086l-1.793-1.793-1.414 1.414L19 20.914l4.207-4.207zM14 11H3v2h11zM3 4h11v2H3zm9 14H3v2h9z"
        />
      </svg>
    );
  },
);

export default ProSortDescLine;
