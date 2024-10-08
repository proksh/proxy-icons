import * as React from "react";
import { IconProps } from "./types";

export const ProFindReplaceLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.111 6.865a6.47 6.47 0 0 0-1.097 3.18L2.02 9.909a8.5 8.5 0 0 1 12.81-6.723l.008.004q.21.124.415.263a8.46 8.46 0 0 1 3.144 3.9l-6.354-.034 1.666-2.472a6.5 6.5 0 0 0-8.598 2.018M6.17 17.814a8.5 8.5 0 0 0 9.358-.458l5.058 5.058L22 21l-5.01-5.01q.295-.35.557-.737a8.47 8.47 0 0 0 1.433-4.16l-1.995-.139a6.5 6.5 0 0 1-9.695 5.198l1.667-2.47-6.354-.035a8.46 8.46 0 0 0 3.566 4.167"
        />
      </svg>
    );
  },
);

export default ProFindReplaceLine;
