import * as React from "react";
import { IconProps } from "./types";

export const ProRoadsterFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.36 4h13.28l3.23 7H24v2l-2 .667V22h-3v-2H5v2H2v-8.333L0 13v-2h2.13zm12 2H6.64l-2.308 5h15.336zM6 17h3c.552 0 1.006-.472.733-.952C9.094 14.925 7.355 14 5 14v2a1 1 0 0 0 1 1m12 0a1 1 0 0 0 1-1v-2c-2.355 0-4.094.925-4.733 2.048-.273.48.18.952.733.952z"
        />
      </svg>
    );
  },
);

export default ProRoadsterFill;
