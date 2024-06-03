import * as React from "react";
import { IconProps } from "./types";

export const ProVolumeUpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2.92v18.16L5.65 16H1V8h4.65zM23 12c0 3.292-1.446 6.246-3.738 8.262l-1.418-1.418A8.98 8.98 0 0 0 21 12a8.98 8.98 0 0 0-3.155-6.844l1.417-1.418A10.97 10.97 0 0 1 23 12"
        />
        <path
          fill={color}
          d="M18 12a5.99 5.99 0 0 1-2.287 4.713l-1.429-1.429A4 4 0 0 0 16 12c0-1.36-.679-2.561-1.716-3.284l1.43-1.43A5.99 5.99 0 0 1 18 12"
        />
      </svg>
    );
  },
);

export default ProVolumeUpFill;
