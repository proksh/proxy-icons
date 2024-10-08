import * as React from "react";
import { IconProps } from "./types";

export const ProScales3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 19h-4V5.388l3.716 1.238-3.049 8.583.547.446A5.98 5.98 0 0 0 18 17a5.98 5.98 0 0 0 3.786-1.345l.547-.446-3.061-8.618 3.079-1.155-.703-1.872-3.668 1.375L13 3.28V2h-2v1.28L6.02 4.94 2.35 3.563l-.702 1.872 3.217 1.207-3.044 8.566.547.446A5.98 5.98 0 0 0 6.155 17a5.98 5.98 0 0 0 3.786-1.345l.547-.446L7.422 6.58 11 5.387V19H7v2h10zm1-4a4 4 0 0 1-1.955-.51L18 8.988l1.956 5.504A4 4 0 0 1 18 15m-13.8-.51 1.955-5.503L8.11 14.49a4 4 0 0 1-1.955.51 4 4 0 0 1-1.956-.51"
        />
      </svg>
    );
  },
);

export default ProScales3Line;
