import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBack2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.586 12 9.11 9.525l1.414-1.414L13 10.586l2.475-2.475 1.414 1.414L14.414 12l2.475 2.475-1.414 1.414L13 13.414l-2.475 2.475-1.414-1.414z"
        />
        <path
          fill={color}
          d="M5.652 3.47 6.5 3H21l1 1v16l-1 1H6.5l-.848-.47-5-8v-1.06zM7.054 5 2.68 12l4.375 7H20V5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDeleteBack2Line;
