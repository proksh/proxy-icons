import * as React from "react";
import { IconProps } from "./types";

export const ProRoadsterLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 17h3c.552 0 1.006-.472.733-.952C9.094 14.925 7.355 14 5 14v2a1 1 0 0 0 1 1m9 0h3a1 1 0 0 0 1-1v-2c-2.355 0-4.094.925-4.733 2.048-.273.48.18.952.733.952"
        />
        <path
          fill={color}
          d="m18.64 4 3.23 7H24v2l-2 .667V22h-3v-2H5v2H2v-8.333L0 13v-2h2.13l3.23-7zm1.028 7L17.36 6H6.64l-2.308 5zM4 13v5h16v-5z"
        />
      </svg>
    );
  },
);

export default ProRoadsterLine;
