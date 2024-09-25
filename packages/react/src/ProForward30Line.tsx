import * as React from "react";
import { IconProps } from "./types";

export const ProForward30Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a7.99 7.99 0 0 1 6.616 3.5H16v.75h-3l-.75.75v6l.75.75h3l.75-.75V9.5H22v-6h-2V6a9.98 9.98 0 0 0-8-4C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h-2a8 8 0 1 1-8-8m3.25 10.25h-1.5v-4.5h1.5z"
        />
        <path
          fill={color}
          d="M9.5 12.75a.75.75 0 0 1 0 1.5h-2v1.5h2A2.25 2.25 0 0 0 11.177 12 2.25 2.25 0 0 0 9.5 8.25h-2v1.5h2a.75.75 0 0 1 0 1.5H8v1.5z"
        />
      </svg>
    );
  },
);

export default ProForward30Line;
