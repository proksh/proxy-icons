import * as React from "react";
import { IconProps } from "./types";

export const ProFolder5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3h8.414l2 2H21v2H3zM1.895 9l1.2 12h17.81l1.2-12zm3.01 10-.8-8h15.79l-.8 8z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFolder5Line;
