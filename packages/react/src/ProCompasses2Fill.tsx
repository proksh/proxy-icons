import * as React from "react";
import { IconProps } from "./types";

export const ProCompasses2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 4.126a4.002 4.002 0 0 1 1.79 6.74l1.516 2.653A6.99 6.99 0 0 0 19 8h2a8.99 8.99 0 0 1-3.694 7.27l3.562 6.234-1.736.992-3.562-6.232A9 9 0 0 1 12 17a9 9 0 0 1-3.57-.736l-3.562 6.232-1.736-.992L9.21 10.867A4.002 4.002 0 0 1 11 4.127V1.999h2zM12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3q-.549-.002-1.054-.14L9.43 14.514A7 7 0 0 0 12 15c.907 0 1.774-.173 2.57-.487l-1.516-2.653q-.506.138-1.054.14"
        />
      </svg>
    );
  },
);

export default ProCompasses2Fill;
