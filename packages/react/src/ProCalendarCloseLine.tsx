import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarCloseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 15.914 1.768 1.768 1.414-1.414-1.768-1.768 1.768-1.768-1.414-1.414L12 13.086l-1.768-1.768-1.414 1.414 1.768 1.768-1.768 1.768 1.414 1.414z"
        />
        <path
          fill={color}
          d="M2 3v18h20V3h-5V1h-2v2H9V1H7v2zm5 2v1h2V5h6v1h2V5h3v3H4V5zm13 5v9H4v-9z"
        />
      </svg>
    );
  },
);

export default ProCalendarCloseLine;
