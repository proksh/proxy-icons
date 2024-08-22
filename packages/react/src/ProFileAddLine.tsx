import * as React from "react";
import { IconProps } from "./types";

export const ProFileAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 16v-3H8v-2h3V8h2v3h3v2h-3v3z" />
        <path
          fill={color}
          d="M15.914 2H3v20h18V7.086zM15 4H5v16h14V8h-4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileAddLine;
