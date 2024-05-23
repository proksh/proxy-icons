import * as React from "react";
import { IconProps } from "./types";

export const ProEmotionSadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.217 3.655.936.842A8 8 0 0 1 12 17c.978 0 1.915.175 2.781.497l.935-.842A5 5 0 0 0 12 15a5 5 0 0 0-3.717 1.655"
        />
        <path
          fill={color}
          d="M12 22a9.97 9.97 0 0 0 7.147-3.005A2 2 0 0 0 21 17a1.3 1.3 0 0 0-.092-.451A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10m0-18a8 8 0 1 0 5.276 14.014A2 2 0 0 1 17 17c0-1.105 2-2.75 2-2.75s.225.185.524.473A8 8 0 0 0 12 4"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProEmotionSadLine;
