import * as React from "react";
import { IconProps } from "./types";

export const ProCameraSwitchLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.054 8.666a5.502 5.502 0 0 0 6.252 8.828l-1.007-1.744a3.5 3.5 0 0 1-4.797-3.128l1.8-.063zm7.892 7.668-2.248-3.893 1.8-.063A3.5 3.5 0 0 0 10.7 9.25L9.694 7.506a5.5 5.5 0 0 1 6.251 8.828"
        />
        <path
          fill={color}
          d="M15.035 2h-6.07l-2 3H2v16h20V5h-4.965zm-7 5 2-3h3.93l2 3H20v12H4V7z"
        />
      </svg>
    );
  },
);

export default ProCameraSwitchLine;
