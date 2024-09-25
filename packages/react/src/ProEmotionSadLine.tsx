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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M17 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M21 17a2 2 0 1 1-4 0c0-1.105 2-2.75 2-2.75s2 1.645 2 2.75"
        />
        <path
          fill={color}
          d="M4 12a8 8 0 1 1 15.986.472l.29.238.009.007.025.021a9 9 0 0 1 .352.31c.218.2.514.484.817.817q.136.149.281.322c.157-.704.24-1.436.24-2.187 0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.95 9.95 0 0 0 5.173-1.44 4 4 0 0 1-1.555-1.423A8 8 0 0 1 4 12"
        />
        <path
          fill={color}
          d="m9.219 17.497-.936-.842A5 5 0 0 1 12 15a5 5 0 0 1 3.717 1.655l-.936.842A8 8 0 0 0 12 17c-.978 0-1.915.175-2.781.497"
        />
      </svg>
    );
  },
);

export default ProEmotionSadLine;
