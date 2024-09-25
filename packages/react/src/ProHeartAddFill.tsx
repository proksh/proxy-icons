import * as React from "react";
import { IconProps } from "./types";

export const ProHeartAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.487 4.828a6 6 0 0 0-8.486 0v.002l-.002-.002a6 6 0 0 0-8.485 8.486l8.485 8.485 1.3-1.299H12v-5h3.5V12h5v1.3a6 6 0 0 0-.014-8.472"
        />
        <path fill={color} d="M17 17h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
      </svg>
    );
  },
);

export default ProHeartAddFill;
