import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 3H9V1H7v2H2v18h20V3h-5V1h-2zM7 6h2V5h6v1h2V5h3v3H4V5h3zm-3 4h16v9H4z"
        />
      </svg>
    );
  },
);

export default ProCalendarLine;
