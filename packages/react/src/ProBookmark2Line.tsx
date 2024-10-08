import * as React from "react";
import { IconProps } from "./types";

export const ProBookmark2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 9H8v2h8z" />
        <path
          fill={color}
          d="m5 2.5-1 1v18l1.54.841L12 18.19l6.46 4.152L20 21.5v-18l-1-1zm1 17.168V4.5h12v15.168l-5.46-3.51h-1.08z"
        />
      </svg>
    );
  },
);

export default ProBookmark2Line;
