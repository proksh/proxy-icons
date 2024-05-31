import * as React from "react";
import { IconProps } from "./types";

export const ProCapsuleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12.147 3.868-7.779 7.778a6 6 0 1 0 8.486 8.486l7.778-7.778a6 6 0 0 0-8.485-8.486m-3.182 6.01 5.656 5.658-3.181 3.182a4 4 0 0 1-5.657-5.657z"
        />
      </svg>
    );
  },
);

export default ProCapsuleFill;
