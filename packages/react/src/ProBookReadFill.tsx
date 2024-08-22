import * as React from "react";
import { IconProps } from "./types";

export const ProBookReadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 9h-6V7h6zm-6 3h6v-2h-6z" />
        <path
          fill={color}
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm18 1h-8v14h8z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProBookReadFill;
