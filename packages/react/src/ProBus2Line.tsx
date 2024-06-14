import * as React from "react";
import { IconProps } from "./types";

export const ProBus2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path
          fill={color}
          d="M4 3 3 4v4H2v4h1v7l1 1h.5v2h3v-2h9v2h3v-2h.5l1-1v-7h1V8h-1V4l-1-1zm15 9H5V5h14zM5 14h14v4H5z"
        />
      </svg>
    );
  },
);

export default ProBus2Line;
