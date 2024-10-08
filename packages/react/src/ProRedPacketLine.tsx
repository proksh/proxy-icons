import * as React from "react";
import { IconProps } from "./types";

export const ProRedPacketLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h18v20H3zm16 2H5v3.141a10 10 0 0 0 4.827 2.622 2.5 2.5 0 0 1 4.346 0A10 10 0 0 0 19 7.141zm-9.381 7.764A11.9 11.9 0 0 1 5 9.748V20h14V9.748a11.9 11.9 0 0 1-4.619 2.016 2.501 2.501 0 0 1-4.762 0"
        />
      </svg>
    );
  },
);

export default ProRedPacketLine;
