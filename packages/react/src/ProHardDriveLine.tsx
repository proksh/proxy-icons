import * as React from "react";
import { IconProps } from "./types";

export const ProHardDriveLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15 16h2v2h-2z" />
        <path
          fill={color}
          d="m3 3 1-1h16l1 1v18l-1 1H4l-1-1zm2 9.95V20h14V4h-5.05A10 10 0 0 1 5 12.95M11.938 4H5v6.938A8.004 8.004 0 0 0 11.938 4"
        />
      </svg>
    );
  },
);

export default ProHardDriveLine;
