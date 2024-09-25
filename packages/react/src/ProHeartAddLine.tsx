import * as React from "react";
import { IconProps } from "./types";

export const ProHeartAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.072 6.243a4 4 0 0 0-5.657 0L12 7.658l-1.415-1.415a4 4 0 0 0-5.657 5.656l.005.005 8.279 8.394-1.424 1.404-8.274-8.388-.003-.003A6 6 0 0 1 12 4.828v.002l.001-.002a6 6 0 0 1 8.486 8.486l-1.415-1.415a4 4 0 0 0 0-5.656"
        />
        <path fill={color} d="M17 17v-3h2v3h3v2h-3v3h-2v-3h-3v-2z" />
      </svg>
    );
  },
);

export default ProHeartAddLine;
