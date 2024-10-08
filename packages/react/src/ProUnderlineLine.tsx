import * as React from "react";
import { IconProps } from "./types";

export const ProUnderlineLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 2v9a6 6 0 0 0 12 0V2h-2v9a4 4 0 0 1-8 0V2zm14 19v-2H4v2z"
        />
      </svg>
    );
  },
);

export default ProUnderlineLine;
