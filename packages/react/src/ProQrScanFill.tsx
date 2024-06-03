import * as React from "react";
import { IconProps } from "./types";

export const ProQrScanFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v5h18V4l-1-1zm-1 8h18v2H3zm18 4H3v5l1 1h16l1-1z"
        />
      </svg>
    );
  },
);

export default ProQrScanFill;
