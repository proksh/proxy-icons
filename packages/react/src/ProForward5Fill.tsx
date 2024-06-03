import * as React from "react";
import { IconProps } from "./types";

export const ProForward5Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20.293 3.793-1.18 1.18A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h-2a8 8 0 1 1-2.3-5.614l-1.407 1.407L17 9.5h5v-5z"
        />
        <path
          fill={color}
          d="M14.5 8.75H9.75v4h3a.5.5 0 0 1 0 1H9.5v1.5h3.25a2 2 0 1 0 0-4h-1.5v-1h3.25z"
        />
      </svg>
    );
  },
);

export default ProForward5Fill;
