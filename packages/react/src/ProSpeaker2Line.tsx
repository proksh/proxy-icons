import * as React from "react";
import { IconProps } from "./types";

export const ProSpeaker2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
        <path
          fill={color}
          d="M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        />
        <path fill={color} d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm2 1v14h14V5z" />
      </svg>
    );
  },
);

export default ProSpeaker2Line;
