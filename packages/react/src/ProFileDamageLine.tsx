import * as React from "react";
import { IconProps } from "./types";

export const ProFileDamageLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.914 2H3v20h18V7.086zM5 15.25l2 1.25 3-3.5 3 4 2-2.5 3 .5-3-3-2 2.5-3-5L6.5 13 5 11.714V4h10v4h4v12H5z"
        />
      </svg>
    );
  },
);

export default ProFileDamageLine;
