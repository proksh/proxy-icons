import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 3h6V1h2v2h5v18H2V3h5V1h2zM7 5H4v4h16V5h-3v1h-2V5H9v1H7z"
        />
      </svg>
    );
  },
);

export default ProCalendarFill;
