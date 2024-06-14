import * as React from "react";
import { IconProps } from "./types";

export const ProH3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 4v17h3v-7.5h6V21h3V4h-3v6.5h-6V4zm14 4h7.25v2.909l-2.047 2.275A4.002 4.002 0 0 1 19.5 21H18a4 4 0 0 1-4-4h3a1 1 0 0 0 1 1h1.5a1 1 0 1 0 0-2h-2l-1.115-2.503L18.632 11H15.5z"
        />
      </svg>
    );
  },
);

export default ProH3Fill;
