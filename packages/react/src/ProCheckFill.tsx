import * as React from "react";
import { IconProps } from "./types";

export const ProCheckFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.31 8.31 9.5 19.122l-6.06-6.06 2.12-2.122 3.94 3.94 8.69-8.69z"
        />
      </svg>
    );
  },
);

export default ProCheckFill;
