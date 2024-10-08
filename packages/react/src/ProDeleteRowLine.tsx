import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteRowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M22 2H2v8h20zM4 8V4h16v4zm15 10h-6v-2h6z" />
        <path
          fill={color}
          d="M10 17a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        />
      </svg>
    );
  },
);

export default ProDeleteRowLine;
