import * as React from "react";
import { IconProps } from "./types";

export const ProCrossFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2 9 3v4H5L4 8v4l1 1h4v8l1 1h4l1-1v-8h4l1-1V8l-1-1h-4V3l-1-1z"
        />
      </svg>
    );
  },
);

export default ProCrossFill;
