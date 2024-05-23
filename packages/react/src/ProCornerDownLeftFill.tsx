import * as React from "react";
import { IconProps } from "./types";

export const ProCornerDownLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 12V5h2v9h-8v4.5l-1.707.707-5.5-5.5v-1.414l5.5-5.5L11 7.5V12z"
        />
      </svg>
    );
  },
);

export default ProCornerDownLeftFill;
