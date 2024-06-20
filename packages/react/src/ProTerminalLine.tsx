import * as React from "react";
import { IconProps } from "./types";

export const ProTerminalLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.293 6.207 8.086 12l-5.793 5.793 1.414 1.414L10.914 12 3.707 4.793zM11 21h10v-2H11z"
        />
      </svg>
    );
  },
);

export default ProTerminalLine;
