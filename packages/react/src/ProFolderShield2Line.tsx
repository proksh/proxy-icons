import * as React from "react";
import { IconProps } from "./types";

export const ProFolderShield2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.414 3H2v18h10v-2H4V5h5.586l2 2H20v2h2V5h-9.586z"
        />
        <path
          fill={color}
          d="M22 11h-9v5.763a3 3 0 0 0 1.139 2.353l3.361 2.66 3.361-2.66A3 3 0 0 0 22 16.763zm-7 5.763V13h5v3.763a1 1 0 0 1-.38.784l-2.12 1.678-2.12-1.678a1 1 0 0 1-.38-.784"
        />
      </svg>
    );
  },
);

export default ProFolderShield2Line;
