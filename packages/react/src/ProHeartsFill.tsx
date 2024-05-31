import * as React from "react";
import { IconProps } from "./types";

export const ProHeartsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.487 4.828a6 6 0 0 0-8.486 0v.002l-.002-.002a6 6 0 0 0-8.485 8.486l8.485 8.485 2.742-2.742-2.51-2.608c-1.641-1.704-1.641-4.451 0-6.155a4.16 4.16 0 0 1 5.769-.25 4.15 4.15 0 0 1 4.24-.769 5.98 5.98 0 0 0-1.753-4.447"
        />
        <path
          fill={color}
          d="M20.822 11.285a2.156 2.156 0 0 0-2.642.396L17 12.907l-1.18-1.226a2.16 2.16 0 0 0-3.149 0c-.895.93-.895 2.451 0 3.38l4.328 4.497 4.33-4.496c.895-.93.895-2.452 0-3.381a2.3 2.3 0 0 0-.507-.396"
        />
      </svg>
    );
  },
);

export default ProHeartsFill;
