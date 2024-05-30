import * as React from "react";
import { IconProps } from "./types";

export const ProUnlockPasswordLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 10 1-1h14l1 1v11l-1 1H5l-1-1zm2 1v9h12v-9z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M5 3a3 3 0 0 0-3 3v1H0V6a5 5 0 0 1 10 0v4H8V6a3 3 0 0 0-3-3"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path fill={color} d="M11 15h2v2h-2zm3.5 0h2v2h-2zm-7 0h2v2h-2z" />
      </svg>
    );
  },
);

export default ProUnlockPasswordLine;
