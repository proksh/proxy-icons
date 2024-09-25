import * as React from "react";
import { IconProps } from "./types";

export const ProQrScanLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v4h2V5h14v3h2V4l-1-1zm-1 8h18v2H3zm2 8v-3H3v4l1 1h16l1-1v-4h-2v3z"
        />
      </svg>
    );
  },
);

export default ProQrScanLine;
