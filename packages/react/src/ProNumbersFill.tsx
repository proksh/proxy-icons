import * as React from "react";
import { IconProps } from "./types";

export const ProNumbersFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.5 2h-5v16h5zm-7 4h-5v12h5zm-7 4h-5v8h5zm-5 10h19v2h-19z"
        />
      </svg>
    );
  },
);

export default ProNumbersFill;
