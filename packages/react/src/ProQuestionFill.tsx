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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-3.5a1.5 1.5 0 0 1 0 3l-1 1V14h2v-.645A3.502 3.502 0 0 0 12 6.5 3.5 3.5 0 0 0 8.5 10h2A1.5 1.5 0 0 1 12 8.5M11 17v-2h2v2z"
        />
      </svg>
    );
  },
);

export default ProQuestionFill;
