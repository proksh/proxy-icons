import * as React from "react";
import { IconProps } from "./types";

export const ProTakeawayFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 3v10h-4v-2H2v7l1 1h.126a4.002 4.002 0 0 0 7.748 0h4.252a4.002 4.002 0 1 0 7.504-2.682L19.934 9H21l1-1V4l-1-1h-4V2l-1-1h-4v2zm2 2h3v2h-3zm2 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        />
        <path fill={color} d="M2 3h9v7H2zm2 2v1h5V5z" />
      </svg>
    );
  },
);

export default ProTakeawayFill;
