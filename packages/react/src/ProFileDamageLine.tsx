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
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M15.914 2H3v20h18V7.086zM5 15.25V20h14V8h-4V4H5v7.714L6.5 13 10 9.5l3 5 2-2.5 3 3-3-.5-2 2.5-3-4-3 3.5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileDamageLine;
