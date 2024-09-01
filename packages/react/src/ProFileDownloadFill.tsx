import * as React from "react";
import { IconProps } from "./types";

export const ProFileDownloadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V22H3zm10.261 10V7.992h-2.5V12H8.01L12 16l4.012-4z"
        />
      </svg>
    );
  },
);

export default ProFileDownloadFill;
