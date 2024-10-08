import * as React from "react";
import { IconProps } from "./types";

export const ProInformation2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10 12.5v-2h3V15h1v2h-4v-2h1v-2.5z"
        />
      </svg>
    );
  },
);

export default ProInformation2Fill;
