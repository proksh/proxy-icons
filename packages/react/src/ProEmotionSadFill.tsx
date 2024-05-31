import * as React from "react";
import { IconProps } from "./types";

export const ProEmotionSadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-1.092 4.549C20.516 15.497 19 14.25 19 14.25s-2 1.645-2 2.75a2 2 0 0 0 2.147 1.995A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12m8-.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-7.781 5.997A8 8 0 0 1 12 17c.978 0 1.915.175 2.781.497l.935-.842A5 5 0 0 0 12 15a5 5 0 0 0-3.717 1.655z"
        />
      </svg>
    );
  },
);

export default ProEmotionSadFill;
