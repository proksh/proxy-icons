import * as React from "react";
import { IconProps } from "./types";

export const ProGenderlessFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 8.07A7.002 7.002 0 0 1 12 22a7 7 0 0 1-1-13.93V1h2z"
        />
      </svg>
    );
  },
);

export default ProGenderlessFill;
