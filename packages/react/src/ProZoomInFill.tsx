import * as React from "react";
import { IconProps } from "./types";

export const ProZoomInFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 2a8.5 8.5 0 1 0 5.027 15.355l5.059 5.06L22 21l-5.01-5.01A8.5 8.5 0 0 0 10.5 2m-1 12v-2.5H7v-2h2.5V7h2v2.5H14v2h-2.5V14z"
        />
      </svg>
    );
  },
);

export default ProZoomInFill;
