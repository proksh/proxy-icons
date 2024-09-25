import * as React from "react";
import { IconProps } from "./types";

export const ProLineHeightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m.793 6.793 3.5-3.5h1.414l3.5 3.5L8.5 8.5H6V11H4V8.5H1.5zM11 3.75h10v2.5H11zm-2 7h12v2.5H9zm12 7H11v2.5h10zM6 16h2.5l.707 1.707-3.5 3.5H4.293l-3.5-3.5L1.5 16H4v-3h2z"
        />
      </svg>
    );
  },
);

export default ProLineHeightFill;
