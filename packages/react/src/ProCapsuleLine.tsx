import * as React from "react";
import { IconProps } from "./types";

export const ProCapsuleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.368 10.646a6 6 0 0 0 8.486 8.486l7.778-7.779a6 6 0 0 0-8.486-8.485zm1.414 7.072a4 4 0 0 1 0-5.657l3.182-3.182 5.657 5.657-3.182 3.182a4 4 0 0 1-5.657 0m10.254-4.597L8.379 7.464l3.182-3.182a4 4 0 1 1 5.656 5.657z"
        />
      </svg>
    );
  },
);

export default ProCapsuleLine;
