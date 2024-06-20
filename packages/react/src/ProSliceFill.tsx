import * as React from "react";
import { IconProps } from "./types";

export const ProSliceFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.303 3.247 2.205 19.345l1.714.428.242-.97-.241.97.001.001h.004l.008.003.022.005.07.015q.087.018.236.043c.2.03.48.065.83.083.704.037 1.694.012 2.89-.228 2.403-.48 5.586-1.813 8.908-5.134l.707-.707-1.768-1.768 5.657-5.657z"
        />
      </svg>
    );
  },
);

export default ProSliceFill;
