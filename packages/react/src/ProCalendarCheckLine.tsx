import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarCheckLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11 17.914 5.707-5.707-1.414-1.414L11 15.086l-2.293-2.293-1.414 1.414z"
        />
        <path
          fill={color}
          d="M2 3v18h20V3h-5V1h-2v2H9V1H7v2zm5 3h2V5h6v1h2V5h3v3H4V5h3zm13 13H4v-9h16z"
        />
      </svg>
    );
  },
);

export default ProCalendarCheckLine;
