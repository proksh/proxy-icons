import * as React from "react";
import { IconProps } from "./types";

export const ProAttachment2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.513 3.234 5.149 9.598a7.25 7.25 0 1 0 10.253 10.253l8.308-8.308-1.414-1.414-8.308 8.308a5.25 5.25 0 1 1-7.425-7.424l6.364-6.364a3.25 3.25 0 0 1 4.596 4.596l-5.657 5.657a1.25 1.25 0 0 1-1.768-1.768l5.48-5.48-1.414-1.414-5.48 5.48a3.25 3.25 0 0 0 4.596 4.596l5.657-5.657a5.25 5.25 0 1 0-7.424-7.425"
        />
      </svg>
    );
  },
);

export default ProAttachment2Line;
