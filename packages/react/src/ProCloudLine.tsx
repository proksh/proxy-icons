import * as React from "react";
import { IconProps } from "./types";

export const ProCloudLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.5 5a5 5 0 0 1 5 5v1h1a4 4 0 0 1 0 8H6a3.5 3.5 0 0 1-.323-6.985l1.077-.099-.182-1.066A5 5 0 0 1 11.5 5m6.94 4.073a7.001 7.001 0 0 0-13.937 1.133A5.502 5.502 0 0 0 6 21h11.5a6 6 0 0 0 .94-11.927"
        />
      </svg>
    );
  },
);

export default ProCloudLine;
