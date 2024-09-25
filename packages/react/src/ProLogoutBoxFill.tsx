import * as React from "react";
import { IconProps } from "./types";

export const ProLogoutBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20 3-1-1H5L4 3v18l1 1h14l1-1zM4 12.013 8.995 7v3.438H14v3.124H8.995V17z"
        />
      </svg>
    );
  },
);

export default ProLogoutBoxFill;
