import * as React from "react";
import { IconProps } from "./types";

export const ProCalendar2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M6 15h2v-2H6zm7 0h-2v-2h2zm3 0h2v-2h-2z" />
        <path
          fill={color}
          d="M2 3h5V1h2v2h6V1h2v2h5v18H2zm5 3V5H4v3h16V5h-3v1h-2V5H9v1zm13 13v-9H4v9z"
        />
      </svg>
    );
  },
);

export default ProCalendar2Line;
