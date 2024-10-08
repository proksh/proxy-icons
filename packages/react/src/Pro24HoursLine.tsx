import * as React from "react";
import { IconProps } from "./types";

export const Pro24HoursLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.384 7.5a8 8 0 0 1 14.6 4h2.004C21.728 6.21 17.355 2 12 2a9.99 9.99 0 0 0-8 4V3.5H2v6h6v-2zM4 12a8 8 0 0 0 4 6.93v2.238A10 10 0 0 1 2 12zm5.5 10H15v-2h-2.87l1.84-1.635A3.07 3.07 0 0 0 15 16.07V16a3 3 0 0 0-6 0h2a1 1 0 1 1 2 0v.07c0 .306-.13.597-.36.8L9.5 19.662zm6.5-9h2v4h2v-4h2v9h-2v-3h-4z"
        />
      </svg>
    );
  },
);

export default Pro24HoursLine;
