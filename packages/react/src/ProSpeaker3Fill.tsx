import * as React from "react";
import { IconProps } from "./types";

export const ProSpeaker3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
        />
        <path
          fill={color}
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm4 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m11 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0m12 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        />
      </svg>
    );
  },
);

export default ProSpeaker3Fill;
