import * as React from "react";
import { IconProps } from "./types";

export const ProHeartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.487 4.828a6 6 0 0 0-8.486 0v.002l-.002-.002a6 6 0 0 0-8.485 8.486l8.485 8.485 8.487-8.485a6 6 0 0 0 0-8.486"
        />
      </svg>
    );
  },
);

export default ProHeartFill;
