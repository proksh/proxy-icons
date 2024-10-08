import * as React from "react";
import { IconProps } from "./types";

export const ProSkipBackLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.526 4.12 20 5v14l-1.474.88L6 13.137V19H4V5h2v5.864zM8.109 12 18 17.326V6.674z"
        />
      </svg>
    );
  },
);

export default ProSkipBackLine;
