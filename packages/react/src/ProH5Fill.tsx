import * as React from "react";
import { IconProps } from "./types";

export const ProH5Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 4v17h3v-7.5h6V21h3V4h-3v6.5h-6V4zm21 3.5h-6.752l-1.224 6.732 2.147 1.61 1.578-.79A1.556 1.556 0 1 1 18.944 18H18.5a1.5 1.5 0 0 1-1.5-1.5h-3a4.5 4.5 0 0 0 4.5 4.5h.444a4.556 4.556 0 0 0 4.556-4.556c0-2.992-2.782-5.06-5.519-4.457l.27-1.487H22.5z"
        />
      </svg>
    );
  },
);

export default ProH5Fill;
