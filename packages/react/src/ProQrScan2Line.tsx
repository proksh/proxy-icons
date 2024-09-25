import * as React from "react";
import { IconProps } from "./types";

export const ProQrScan2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 5h-4V3h5l1 1v4h-2zM3 11h18v2H3zm16 5v3h-4v2h5l1-1v-4zM3 4l1-1h5v2H5v3H3zm2 12v3h4v2H4l-1-1v-4z"
        />
      </svg>
    );
  },
);

export default ProQrScan2Line;
