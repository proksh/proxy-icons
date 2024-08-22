import * as React from "react";
import { IconProps } from "./types";

export const ProWheelchairFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0-3 3v6h7.434l2.708 4.515 1.716-1.03L17.566 15H15v-4a3 3 0 0 0-3-3 3 3 0 1 0 0-6"
        />
        <path
          fill={color}
          d="M8 10.341A6 6 0 1 0 15.659 18h-2.194A4 4 0 1 1 8 12.535z"
        />
      </svg>
    );
  },
);

export default ProWheelchairFill;
