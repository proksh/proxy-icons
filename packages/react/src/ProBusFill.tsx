import * as React from "react";
import { IconProps } from "./types";

export const ProBusFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 4v4H2v4h1v7l1 1h.5v2h3v-2h9v2h3v-2h.5l1-1v-7h1V8h-1V4l-1-1H4zm16 1v7H5V5zM6 15h4v2H6zm8 0h4v2h-4z"
        />
      </svg>
    );
  },
);

export default ProBusFill;
