import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifiOffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.589 16.589 18.999 20l1.415-1.414-17-17L2 3l1.914 1.914q-1.216.613-2.32 1.396L1.39 7.748 12 21.108zm7.021-8.841-4.517 5.687L8.084 3.428A18 18 0 0 1 12 3c3.875 0 7.467 1.226 10.405 3.31z"
        />
      </svg>
    );
  },
);

export default ProSignalWifiOffFill;
