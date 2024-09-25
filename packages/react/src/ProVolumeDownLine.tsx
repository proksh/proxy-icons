import * as React from "react";
import { IconProps } from "./types";

export const ProVolumeDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 21.08V2.92L8.65 8H4v8h4.65zM9.35 10 13 7.08v9.84L9.35 14H6v-4zM21 12a5.99 5.99 0 0 1-2.287 4.713l-1.429-1.429A4 4 0 0 0 19 12c0-1.36-.679-2.561-1.716-3.284l1.43-1.43A5.99 5.99 0 0 1 21 12"
        />
      </svg>
    );
  },
);

export default ProVolumeDownLine;
