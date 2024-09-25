import * as React from "react";
import { IconProps } from "./types";

export const ProUnpinFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.667 10.318 14.18 1.833l-1.414 1.414.708.707-2.432 2.432 7.07 7.071 2.433-2.432.706.707zm-6.895 6.454L18.5 19.5l1.414-1.414-14-14L4.5 5.5l3.122 3.122-2.242.747-.39 1.656 3.535 3.536-4.95 4.95 1.414 1.414 4.95-4.95 3.536 3.535 1.672-.444z"
        />
      </svg>
    );
  },
);

export default ProUnpinFill;
