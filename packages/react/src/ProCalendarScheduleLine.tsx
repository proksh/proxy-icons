import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarScheduleLine = React.forwardRef<
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
        d="M15 3H9V1H7v2H2v18h8v-2H4v-9h18V3h-5V1h-2zM7 6h2V5h6v1h2V5h3v3H4V5h3z"
      />
      <path fill={color} d="M18 16.586V14h-2v3.414l2.293 2.293 1.414-1.414z" />
      <path
        fill={color}
        d="M11 17a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      />
    </svg>
  );
});

export default ProCalendarScheduleLine;
