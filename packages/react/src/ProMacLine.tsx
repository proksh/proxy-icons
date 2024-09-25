import * as React from "react";
import { IconProps } from "./types";

export const ProMacLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v13l1 1h7v2l-2 1v1h8v-1l-2-1v-2h7l1-1V4l-1-1zm1 11V5h16v9z"
        />
      </svg>
    );
  },
);

export default ProMacLine;
