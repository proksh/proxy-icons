import * as React from "react";
import { IconProps } from "./types";

export const ProRepeat2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.012 6 16 .99V4H6a4 4 0 0 0-4 4v8h2V8a2 2 0 0 1 2-2zM1.988 18.125 8 23.135v-3.01h10a4 4 0 0 0 4-4v-8h-2v8a2 2 0 0 1-2 2z"
        />
      </svg>
    );
  },
);

export default ProRepeat2Fill;
