import * as React from "react";
import { IconProps } from "./types";

export const ProLeafFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 4V2.847l-1.142.163-.233.034c-1.145.168-2.808.412-5.46-.03C9.95 2.31 6.584 4.457 4.662 7.57c-1.859 3.011-2.44 7.023-1.193 10.528A16 16 0 0 0 3 22h2c0-1.058.11-2.04.303-2.949h.01c1.022-4.563 4.296-6.901 6.226-7.912.208-.109.367.172.188.325-1.504 1.292-3.888 3.865-4.568 7.624 5.342-.063 8.8-1.652 10.93-4.27 2.419-2.972 2.91-7.03 2.91-10.818"
        />
      </svg>
    );
  },
);

export default ProLeafFill;
