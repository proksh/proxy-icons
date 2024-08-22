import * as React from "react";
import { IconProps } from "./types";

export const ProBookLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h15V2zm13 13V4H6a1 1 0 0 0-1 1v10.337A3.5 3.5 0 0 1 6.5 15zM6.5 20a1.5 1.5 0 0 1 0-3H19v3z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProBookLine;
