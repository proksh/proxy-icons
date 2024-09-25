import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarCheckFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 3V1h2v2h5v18H2V3h5V1h2v2zM7 6V5H4v4h16V5h-3v1h-2V5H9v1zm4 11.914 5.707-5.707-1.414-1.414L11 15.086l-2.293-2.293-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProCalendarCheckFill;
