import * as React from "react";
import { IconProps } from "./types";

export const ProQrScan2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v5h6V3zm-1 8h18v2H3zm6 4H3v5l1 1h5zM20 3h-5v6h6V4zm1 12h-6v6h5l1-1z"
        />
      </svg>
    );
  },
);

export default ProQrScan2Fill;
