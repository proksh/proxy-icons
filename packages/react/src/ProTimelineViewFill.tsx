import * as React from "react";
import { IconProps } from "./types";

export const ProTimelineViewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm4 5h8V7H6zm2 4h8v-2H8zm2 4h8v-2h-8z"
        />
      </svg>
    );
  },
);

export default ProTimelineViewFill;
