import * as React from "react";
import { IconProps } from "./types";

export const ProArrowUpCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m4-10h-3v4h-2v-4H8l4-4z"
        />
      </svg>
    );
  },
);

export default ProArrowUpCircleFill;
