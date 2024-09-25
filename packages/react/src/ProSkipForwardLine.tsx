import * as React from "react";
import { IconProps } from "./types";

export const ProSkipForwardLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.474 4.12 4 5v14l1.474.88L18 13.137V19h2V5h-2v5.864zM15.891 12 6 17.326V6.674z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSkipForwardLine;
