import * as React from "react";
import { IconProps } from "./types";

export const ProEmotionUnhappyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m6-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 14a3 3 0 0 0-3 3H7a5 5 0 0 1 10 0h-2a3 3 0 0 0-3-3"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProEmotionUnhappyFill;