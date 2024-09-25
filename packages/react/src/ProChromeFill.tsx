import * as React from "react";
import { IconProps } from "./types";

export const ProChromeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          stroke={color}
          d="M21 12a9 9 0 0 1-7.159 8.811l3.315-5.742A6 6 0 0 0 18 12c0-.7-.12-1.374-.342-2h3.12A9 9 0 0 1 21 12ZM6.743 14.895a6 6 0 0 0 4.16 3.005l-1.56 2.702A9.005 9.005 0 0 1 3.448 9.187zM12 3a8.98 8.98 0 0 1 6.709 3H12a5.99 5.99 0 0 0-4.56 2.1L5.88 5.4A8.97 8.97 0 0 1 12 3Zm-2 9a2 2 0 1 1 3.735.997l-.016.026a2 2 0 0 1-3.45-.018l-.028-.052A2 2 0 0 1 10 12Z"
          strokeWidth="2"
        />
      </svg>
    );
  },
);

export default ProChromeFill;
