import * as React from "react";
import { IconProps } from "./types";

export const ProAlignTopLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 5h18V3H3zm4 2.086-4.207 4.207 1.414 1.414L6 10.914V21h2V10.914l1.793 1.793 1.414-1.414zm5.793 4.207L17 7.086l4.207 4.207-1.414 1.414L18 10.914V21h-2V10.914l-1.793 1.793z"
        />
      </svg>
    );
  },
);

export default ProAlignTopLine;
