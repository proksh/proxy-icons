import * as React from "react";
import { IconProps } from "./types";

export const ProFileUserFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V22H3zm6 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-2 7h10a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3"
        />
      </svg>
    );
  },
);

export default ProFileUserFill;
