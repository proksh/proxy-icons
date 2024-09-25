import * as React from "react";
import { IconProps } from "./types";

export const ProSimCardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.207 2.293 14.5 2H5L4 3v18l1 1h14l1-1V7.5l-.293-.707zM16 12v6H8v-6z"
        />
      </svg>
    );
  },
);

export default ProSimCardFill;
