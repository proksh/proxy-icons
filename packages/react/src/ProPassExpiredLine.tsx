import * as React from "react";
import { IconProps } from "./types";

export const ProPassExpiredLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16 10.586 1.793-1.793 1.414 1.414L17.414 12l1.793 1.793-1.414 1.414L16 13.414l-1.793 1.793-1.414-1.414L14.586 12l-1.793-1.793 1.414-1.414zM4 16.5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"
        />
        <path
          fill={color}
          d="M8 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M1 4h22v16H1zm2 2v12h18V6z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProPassExpiredLine;
