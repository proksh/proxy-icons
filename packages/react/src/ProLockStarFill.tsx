import * as React from "react";
import { IconProps } from "./types";

export const ProLockStarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 0 0-5 5v2H4v13h11.448l.18-.904-2.062-1.907.561-1.727 2.789-.33 1.176-2.55h1.816l.092.198V9h-3V7a5 5 0 0 0-5-5m3 7H9V7a3 3 0 1 1 6 0z"
        />
        <path
          fill={color}
          d="m19 16 1.128 2.447 2.676.317-1.978 1.83.525 2.642L19 21.92l-2.351 1.316.525-2.643-1.978-1.83 2.676-.316z"
        />
      </svg>
    );
  },
);

export default ProLockStarFill;
