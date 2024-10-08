import * as React from "react";
import { IconProps } from "./types";

export const ProSpeaker3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <path
          fill={color}
          d="M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m6-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        />
        <path fill={color} d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm2 1v14h14V5z" />
      </svg>
    );
  },
);

export default ProSpeaker3Line;
