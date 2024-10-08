import * as React from "react";
import { IconProps } from "./types";

export const ProCrossLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9 3 1-1h4l1 1v4h4l1 1v4l-1 1h-4v8l-1 1h-4l-1-1v-8H5l-1-1V8l1-1h4zm2 1v5H6v2h5v9h2v-9h5V9h-5V4z"
        />
      </svg>
    );
  },
);

export default ProCrossLine;
