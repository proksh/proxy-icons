import * as React from "react";
import { IconProps } from "./types";

export const ProRobot3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        />
        <path
          fill={color}
          d="M11 4V2h2v2h3a5 5 0 0 1 5 5v12l-1 1H4l-1-1V9a5 5 0 0 1 5-5zm-3 9a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
        />
      </svg>
    );
  },
);

export default ProRobot3Fill;
