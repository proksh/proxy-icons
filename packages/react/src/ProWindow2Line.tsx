import * as React from "react";
import { IconProps } from "./types";

export const ProWindow2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 6h-4v2h4z" />
        <path
          fill={color}
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm18 1H4v4h16zm0 6H4v8h16z"
        />
      </svg>
    );
  },
);

export default ProWindow2Line;
