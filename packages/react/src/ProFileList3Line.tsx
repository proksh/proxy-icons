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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path fill={color} d="M14 7H6v2h8zm-8 4h8v2H6zm5 4H6v2h5z" />
        <path
          fill={color}
          d="M2 2h16v13h4v4a3 3 0 0 1-3 3H3l-1-1zm16 17a1 1 0 1 0 2 0v-2h-2zM16 4H4v16h12z"
        />
      </svg>
    );
  },
);

export default ProFileList3Line;
