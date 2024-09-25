import * as React from "react";
import { IconProps } from "./types";

export const ProListCheck2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 5 1-1h4l1 1v4l-1 1H4L3 9zm2 1v2h2V6zm6 0h10V4H11zm0 10h10v-2H11zm6 4h-6v-2h6zm-6-10h6V8h-6zm-7 4-1 1v4l1 1h4l1-1v-4l-1-1zm1 4v-2h2v2z"
        />
      </svg>
    );
  },
);

export default ProListCheck2Line;
