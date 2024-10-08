import * as React from "react";
import { IconProps } from "./types";

export const ProBookFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h15V2zM5 18.5A1.5 1.5 0 0 1 6.5 17H19v3H6.5A1.5 1.5 0 0 1 5 18.5"
        />
      </svg>
    );
  },
);

export default ProBookFill;
