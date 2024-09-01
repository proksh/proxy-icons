import * as React from "react";
import { IconProps } from "./types";

export const ProFileWord2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 8H5v8h2.317L9 14.037 10.683 16H13V8h-2v5.297l-2-2.334-2 2.334z"
        />
        <path
          fill={color}
          d="M14.836 1.014 16 2v20l-1.164.986L2 20.847V3.153zM4 4.847v14.306l10 1.667V3.18zM17 5h3v14h-3v2h4l1-1V4l-1-1h-4z"
        />
      </svg>
    );
  },
);

export default ProFileWord2Line;
