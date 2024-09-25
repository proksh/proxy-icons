import * as React from "react";
import { IconProps } from "./types";

export const ProDeviceLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 3 1-1h14l1 1v5h2l1 1v12l-1 1h-8l-1-1v-1H4l-1-1zm9 15V9l1-1h4V4H5v14zm2 2h6V10h-6z"
        />
      </svg>
    );
  },
);

export default ProDeviceLine;
