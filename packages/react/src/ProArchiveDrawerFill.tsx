import * as React from "react";
import { IconProps } from "./types";

export const ProArchiveDrawerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 3 1-1h16l1 1v8H3zm12 2.5H9v2h6zM3 13v8l1 1h16l1-1v-8zm6 2.5h6v2H9z"
        />
      </svg>
    );
  },
);

export default ProArchiveDrawerFill;
