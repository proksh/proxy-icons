import * as React from "react";
import { IconProps } from "./types";

export const ProScissorsCutLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 10c.812 0 1.568-.242 2.2-.658l2.612 2.612-2.668 2.669a4 4 0 1 0 1.368 1.46l.785-.785-.004-.005 7-7 .005.005 4.384-4.385a2 2 0 0 0-2.828 0l-6.628 6.627-2.682-2.683A4 4 0 1 0 6 10m0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7.05 7.364-1.414 1.414 5.248 5.248a2 2 0 0 0 2.828 0z"
        />
        <path
          fill={color}
          d="M2 11h2v2H2zm6 0H6v2h2zm8 0h2v2h-2zm6 0h-2v2h2z"
        />
      </svg>
    );
  },
);

export default ProScissorsCutLine;
