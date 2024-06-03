import * as React from "react";
import { IconProps } from "./types";

export const ProReplay30Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3.707 3.793 1.18 1.18A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 2.3-5.614l1.407 1.407-.19.457H9.5A2.25 2.25 0 0 1 11.177 12 2.25 2.25 0 0 1 9.5 15.75h-2v-1.5h2a.75.75 0 0 0 0-1.5H8v-1.5h1.5a.75.75 0 0 0 0-1.5h-2V8.293L7 9.5H2v-5z"
        />
        <path
          fill={color}
          d="m13 8.25-.75.75v6l.75.75h3l.75-.75V9L16 8.25zm2.25 6h-1.5v-4.5h1.5z"
        />
      </svg>
    );
  },
);

export default ProReplay30Fill;
