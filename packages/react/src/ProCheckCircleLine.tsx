import * as React from "react";
import { IconProps } from "./types";

export const ProCheckCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11 15.914 5.707-5.707-1.414-1.414L11 13.086l-2.293-2.293-1.414 1.414z"
        />
        <path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProCheckCircleLine;
