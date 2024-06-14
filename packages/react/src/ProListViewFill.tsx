import * as React from "react";
import { IconProps } from "./types";

export const ProListViewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm6 5V7H6v2zm10 0V7h-8v2zm-8 4h8v-2h-8zm-2 0v-2H6v2zm2 4h8v-2h-8zm-2 0v-2H6v2z"
        />
      </svg>
    );
  },
);

export default ProListViewFill;
