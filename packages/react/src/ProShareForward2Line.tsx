import * as React from "react";
import { IconProps } from "./types";

export const ProShareForward2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.38 2.224 12.75 3v2.306a8.696 8.696 0 0 0-7.81 7.515l1.886.576a5.15 5.15 0 0 1 4.617-2.858h1.307V13l1.63.776 6.155-5V7.224zm.37 5.072V5.101L18.318 8l-3.568 2.899v-2.36h-3.307c-.794 0-1.557.129-2.27.367a6.67 6.67 0 0 1 4.553-1.635zM4 14v5h16v-5h2v6l-1 1H3l-1-1v-6z"
        />
      </svg>
    );
  },
);

export default ProShareForward2Line;
