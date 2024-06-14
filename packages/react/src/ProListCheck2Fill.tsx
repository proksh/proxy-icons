import * as React from "react";
import { IconProps } from "./types";

export const ProListCheck2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 6.5h10v-3H11zm0 10h10v-3H11zm6 4h-6v-3h6zm-6-10h6v-3h-6zM4 4 3 5v4l1 1h4l1-1V5L8 4zm0 10-1 1v4l1 1h4l1-1v-4l-1-1z"
        />
      </svg>
    );
  },
);

export default ProListCheck2Fill;
