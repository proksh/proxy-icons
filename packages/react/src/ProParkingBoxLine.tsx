import * as React from "react";
import { IconProps } from "./types";

export const ProParkingBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 14v3H9V7h3.5a3.5 3.5 0 1 1 0 7zm0-2h1.5a1.5 1.5 0 0 0 0-3H11z"
        />
        <path fill={color} d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm2 1v14h14V5z" />
      </svg>
    );
  },
);

export default ProParkingBoxLine;
