import * as React from "react";
import { IconProps } from "./types";

export const ProBookReadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 9h-5V7h5zm-5 3h5v-2h-5z" />
        <path
          fill={color}
          d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm1 16V5h7v14zm9 0V5h7v14z"
        />
      </svg>
    );
  },
);

export default ProBookReadLine;
