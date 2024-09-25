import * as React from "react";
import { IconProps } from "./types";

export const ProNumber1Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.237 3.035 5.5-1.5L14 2.5V22h-2V3.81L7.763 4.964z"
        />
      </svg>
    );
  },
);

export default ProNumber1Line;
