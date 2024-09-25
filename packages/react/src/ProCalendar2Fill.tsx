import * as React from "react";
import { IconProps } from "./types";

export const ProCalendar2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 3V1H7v2H2v18h20V3h-5V1h-2v2zM7 5v1h2V5h6v1h2V5h3v4H4V5zm-1 8h2v2H6zm5 2v-2h2v2zm7-2v2h-2v-2z"
        />
      </svg>
    );
  },
);

export default ProCalendar2Fill;
