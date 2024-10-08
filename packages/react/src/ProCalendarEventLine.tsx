import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarEventLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 13H6v4h5z" />
        <path
          fill={color}
          d="M2 3h5V1h2v2h6V1h2v2h5v18H2zm5 3V5H4v3h16V5h-3v1h-2V5H9v1zm13 13v-9H4v9z"
        />
      </svg>
    );
  },
);

export default ProCalendarEventLine;
