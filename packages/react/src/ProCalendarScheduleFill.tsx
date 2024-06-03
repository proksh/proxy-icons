import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarScheduleFill = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M7 6V5H4v4h13a8 8 0 0 0-6.93 12H2V3h5V1h2v2h6V1h2v2h5v7.755A7.97 7.97 0 0 0 17 9h3V5h-3v1h-2V5H9v1z"
      />
      <path
        fill={color}
        d="M23 17a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-5-3h-2v3.414l2.293 2.293 1.414-1.414L18 16.586z"
      />
    </svg>
  );
});

export default ProCalendarScheduleFill;
