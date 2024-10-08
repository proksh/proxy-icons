import * as React from "react";
import { IconProps } from "./types";

export const ProThumbUpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.678 1.43 13.1 1.2l2 1.5.365 1.063L14.309 8H22l1 1v3.5l-.072.371-3 7.5L19 21H8l-1-1V8.5l.178-.57zM2 9l-1 1v10l1 1h3V9z"
        />
      </svg>
    );
  },
);

export default ProThumbUpFill;
