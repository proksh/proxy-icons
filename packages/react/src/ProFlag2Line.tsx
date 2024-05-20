import * as React from "react";
import { IconProps } from "./types";

export const ProFlag2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v18h2v-5h16l.864-1.504L17.658 10l3.206-5.496L20 3zm1 12h14.259l-2.623-4.496V9.496L18.26 5H4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFlag2Line;
