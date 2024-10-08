import * as React from "react";
import { IconProps } from "./types";

export const ProMailOpenLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.64 9.232-1.28 1.536L12 16.302l6.64-5.534-1.28-1.536L12 13.698z"
        />
        <path
          fill={color}
          d="M22 7.465 12 .798 2 7.465V21h20zM4 19V8.535l8-5.333 8 5.333V19z"
        />
      </svg>
    );
  },
);

export default ProMailOpenLine;
