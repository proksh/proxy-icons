import * as React from "react";
import { IconProps } from "./types";

export const ProNpmjsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2h-14v14h14zm-2 2v10h-2.5V9.5h-2.5V17h-5V7z"
        />
      </svg>
    );
  },
);

export default ProNpmjsLine;
