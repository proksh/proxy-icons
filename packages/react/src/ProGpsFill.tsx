import * as React from "react";
import { IconProps } from "./types";

export const ProGpsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 12a7 7 0 0 1-3.681 6.165l1.342 2.685A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 5.34 8.85l1.342-2.685A7 7 0 1 1 19 12"
        />
        <path
          fill={color}
          d="m13.079 13.685 1.345 2.69a5 5 0 1 0-4.847 0l1.345-2.69A1.999 1.999 0 0 1 12 10a2 2 0 0 1 1.079 3.685"
        />
        <path
          fill={color}
          d="m12.488 16.977.94 1.877 1.373 2.748L15 22H9l3-6z"
        />
      </svg>
    );
  },
);

export default ProGpsFill;
