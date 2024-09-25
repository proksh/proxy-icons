import * as React from "react";
import { IconProps } from "./types";

export const ProLogoutBoxRFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 3 1-1h14l1 1v9.013L15.005 7v3.438H10v3.124h5.005V17L20 12.013V21l-1 1H5l-1-1z"
        />
      </svg>
    );
  },
);

export default ProLogoutBoxRFill;
