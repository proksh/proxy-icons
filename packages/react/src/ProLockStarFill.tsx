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
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M7 7a5 5 0 0 1 10 0v2h2l1 1v4.78l-.092-.199h-1.816l-1.176 2.55-2.789.33-.561 1.728 2.062 1.907-.18.904H5l-1-1V10l1-1h2zm8 2V7a3 3 0 1 0-6 0v2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M20.129 18.447 19 16l-1.128 2.447-2.676.317 1.978 1.83-.525 2.642L19 21.92l2.351 1.316-.525-2.643 1.978-1.83z"
        />
      </svg>
    );
  },
);

export default ProLockStarFill;
