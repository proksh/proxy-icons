import * as React from "react";
import { IconProps } from "./types";

export const ProQuestionFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-3.5a1.5 1.5 0 0 0-1.5 1.5h-2a3.5 3.5 0 1 1 4.5 3.355V14h-2v-1.5l1-1a1.5 1.5 0 0 0 0-3M11 17v-2h2v2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProQuestionFill;
