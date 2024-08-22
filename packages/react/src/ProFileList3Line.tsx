import * as React from "react";
import { IconProps } from "./types";

export const ProFileList3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M14 7H6v2h8zm-8 4h8v2H6zm5 4H6v2h5z" />
        <path
          fill={color}
          d="M2 2h16v13h4v4a3 3 0 0 1-3 3H3l-1-1zm16 17v-2h2v2a1 1 0 1 1-2 0M16 4v16H4V4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileList3Line;
