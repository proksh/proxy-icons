import * as React from "react";
import { IconProps } from "./types";

export const ProLoginCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.444 9.364a8 8 0 1 1 0 5.272l-1.888.659A10 10 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2C7.63 2 3.917 4.802 2.556 8.705z"
        />
        <path
          fill={color}
          d="M8.793 8.707 11.086 11H2v2h9.086l-2.293 2.293 1.414 1.414L14.914 12l-4.707-4.707z"
        />
      </svg>
    );
  },
);

export default ProLoginCircleLine;
