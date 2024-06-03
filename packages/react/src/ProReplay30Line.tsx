import * as React from "react";
import { IconProps } from "./types";

export const ProReplay30Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a7.99 7.99 0 0 0-6.616 3.5H8v.75h1.5A2.25 2.25 0 0 1 11.177 12 2.25 2.25 0 0 1 9.5 15.75h-2v-1.5h2a.75.75 0 0 0 0-1.5H8v-1.5h1.5a.75.75 0 0 0 0-1.5h-2V9.5H2v-6h2V6a9.98 9.98 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 8-8"
        />
        <path
          fill={color}
          d="m13 8.25-.75.75v6l.75.75h3l.75-.75V9L16 8.25zm2.25 6h-1.5v-4.5h1.5z"
        />
      </svg>
    );
  },
);

export default ProReplay30Line;
