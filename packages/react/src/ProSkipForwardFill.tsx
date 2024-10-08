import * as React from "react";
import { IconProps } from "./types";

export const ProSkipForwardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 5 1.474-.88L18 10.864V5h2v14h-2v-5.864L5.474 19.88 4 19z"
        />
      </svg>
    );
  },
);

export default ProSkipForwardFill;
