import * as React from "react";
import { IconProps } from "./types";

export const ProFilePaper2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2 3 3v12h2V4h14v15h-2v-2H1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7h2V5a3 3 0 0 0-3-3z"
        />
      </svg>
    );
  },
);

export default ProFilePaper2Line;
