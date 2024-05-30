import * as React from "react";
import { IconProps } from "./types";

export const ProToggleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 5a7 7 0 0 0 0 14h8a7 7 0 1 0 0-14zm8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProToggleFill;
