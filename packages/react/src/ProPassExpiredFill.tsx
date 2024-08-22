import * as React from "react";
import { IconProps } from "./types";

export const ProPassExpiredFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
        <path
          fill={color}
          d="M1 4h22v16H1zm4 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0m7.793 3.793L14.586 12l-1.793-1.793 1.414-1.414L16 10.586l1.793-1.793 1.414 1.414L17.414 12l1.793 1.793-1.414 1.414L16 13.414l-1.793 1.793zM7 13.5a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProPassExpiredFill;
