import * as React from "react";
import { IconProps } from "./types";

export const ProGlassesLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 12a5 5 0 0 1 8.192-3.849A4 4 0 0 1 12 7a4 4 0 0 1 2.808 1.151 5 5 0 1 1-1.264 1.578A2 2 0 0 0 12 9c-.622 0-1.178.284-1.544.729A5 5 0 1 1 1 12m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m9 3a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
        />
      </svg>
    );
  },
);

export default ProGlassesLine;
