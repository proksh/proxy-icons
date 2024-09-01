import * as React from "react";
import { IconProps } from "./types";

export const ProFileWordFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V7.086L15.914 2zm5 7h2v5.297l2-2.334 2 2.334V9h2v8h-2.317L12 15.037 10.317 17H8z"
        />
      </svg>
    );
  },
);

export default ProFileWordFill;
