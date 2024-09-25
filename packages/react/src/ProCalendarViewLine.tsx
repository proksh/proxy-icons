import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarViewLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 17H6v-4h5z" />
        <path
          fill={color}
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm2 5.5V19h16V9.5zm0-2h16V5H4z"
        />
      </svg>
    );
  },
);

export default ProCalendarViewLine;
