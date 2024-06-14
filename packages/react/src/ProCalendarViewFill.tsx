import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarViewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm18 1H4v3h16zM6 17h5v-4H6z"
        />
      </svg>
    );
  },
);

export default ProCalendarViewFill;
