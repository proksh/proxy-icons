import * as React from "react";
import { IconProps } from "./types";

export const ProUnlockPasswordFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0 6a5 5 0 0 1 10 0v3h9l1 1v11l-1 1H5l-1-1V10l1-1h3V6a3 3 0 0 0-6 0v1H0zm7.5 11h2v-2h-2zm5.5 0h-2v-2h2zm1.5 0h2v-2h-2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUnlockPasswordFill;
