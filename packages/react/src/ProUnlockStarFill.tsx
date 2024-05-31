import * as React from "react";
import { IconProps } from "./types";

export const ProUnlockStarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 1a5 5 0 0 0-5 5v1h2V6a3 3 0 0 1 6 0v3H4v13h11.448l.18-.904-2.062-1.907.561-1.727 2.789-.33 1.176-2.55h1.816l.092.198V9H10V6a5 5 0 0 0-5-5"
        />
        <path
          fill={color}
          d="m19 16 1.129 2.447 2.675.317-1.978 1.83.525 2.642L19 21.92l-2.351 1.316.525-2.643-1.978-1.83 2.676-.316z"
        />
      </svg>
    );
  },
);

export default ProUnlockStarFill;
