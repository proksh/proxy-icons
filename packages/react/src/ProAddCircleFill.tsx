import * as React from "react";
import { IconProps } from "./types";

export const ProAddCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-1-5v-4H7v-2h4V7h2v4h4v2h-4v4z"
        />
      </svg>
    );
  },
);

export default ProAddCircleFill;
