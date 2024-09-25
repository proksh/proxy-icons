import * as React from "react";
import { IconProps } from "./types";

export const ProContrast2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m8-10a8 8 0 0 1-14.81 4.2A9 9 0 0 0 16.2 5.19 8 8 0 0 1 20 12"
        />
      </svg>
    );
  },
);

export default ProContrast2Fill;
