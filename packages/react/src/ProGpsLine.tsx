import * as React from "react";
import { IconProps } from "./types";

export const ProGpsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 12a8 8 0 0 1-4.234 7.06l.895 1.79A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 5.34 8.85l.894-1.79A8 8 0 1 1 20 12"
        />
        <path fill={color} d="m12 16 .962 1.923.926 1.853.913 1.826L15 22H9z" />
        <path
          fill={color}
          d="m13.976 15.479.895 1.79a6 6 0 1 0-5.742 0l.896-1.79a4 4 0 1 1 3.951 0"
        />
      </svg>
    );
  },
);

export default ProGpsLine;
