import * as React from "react";
import { IconProps } from "./types";

export const ProForward30Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20.293 3.793-1.18 1.18A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h-2a8 8 0 1 1-2.3-5.614l-1.407 1.407L17 9.5h5v-5z"
        />
        <path
          fill={color}
          d="M9.5 12.75a.75.75 0 0 1 0 1.5h-2v1.5h2A2.25 2.25 0 0 0 11.177 12 2.25 2.25 0 0 0 9.5 8.25h-2v1.5h2a.75.75 0 0 1 0 1.5H8v1.5zm3.5-4.5-.75.75v6l.75.75h3l.75-.75V9L16 8.25zm2.25 6h-1.5v-4.5h1.5z"
        />
      </svg>
    );
  },
);

export default ProForward30Fill;
