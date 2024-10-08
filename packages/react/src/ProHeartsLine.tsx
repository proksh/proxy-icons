import * as React from "react";
import { IconProps } from "./types";

export const ProHeartsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.08 10.464A6 6 0 0 0 11 4.828v.002-.002a6 6 0 0 0-8.485 8.486L11 21.799l3.214-3.213L17 21.428l4.923-5.019a3.797 3.797 0 0 0 0-5.301 3.7 3.7 0 0 0-.841-.644m-3.008-4.221a4 4 0 0 1 1.062 3.76 3.66 3.66 0 0 0-2.134.805 3.666 3.666 0 0 0-4.922.3 3.797 3.797 0 0 0 0 5.301l.734.749L11 18.97 3.928 11.9a4 4 0 1 1 5.657-5.657L11 7.658l1.415-1.415a4 4 0 0 1 5.657 0m-4.566 6.265a1.667 1.667 0 0 1 2.397 0L17 13.627l1.097-1.119a1.667 1.667 0 0 1 2.397 0 1.8 1.8 0 0 1 0 2.5L17 18.573l-3.494-3.563a1.8 1.8 0 0 1 0-2.501"
        />
      </svg>
    );
  },
);

export default ProHeartsLine;
