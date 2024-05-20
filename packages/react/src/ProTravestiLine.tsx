import * as React from "react";
import { IconProps } from "./types";

export const ProTravestiLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.164 5.75 2.543-2.543-1.414-1.414-6.5 6.5 1.414 1.414L4.75 7.164l3.644 3.644a7 7 0 1 0 1.414-1.414zM14 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProTravestiLine;