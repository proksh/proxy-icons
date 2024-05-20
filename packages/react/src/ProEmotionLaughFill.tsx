import * as React from "react";
import { IconProps } from "./types";

export const ProEmotionLaughFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m4-3c.236-1.141 1.266-2 2.5-2s2.26.855 2.5 1.992zm7 0c.236-1.141 1.266-2 2.5-2s2.26.855 2.5 1.992zm-1 8a5 5 0 0 0 5-5v-.004A13 13 0 0 0 12 11c-1.772 0-3.46.354-5 .996V12a5 5 0 0 0 5 5"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProEmotionLaughFill;
