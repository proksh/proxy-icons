import * as React from "react";
import { IconProps } from "./types";

export const ProListIndefiniteLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 5 1-1h5l1 1v5l-1 1H4l-1-1zm2 1v3h3V6zM2.5 17a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M13 6h8V4h-8zm8 7h-8v-2h8zm-8 7h8v-2h-8z"
        />
      </svg>
    );
  },
);

export default ProListIndefiniteLine;
