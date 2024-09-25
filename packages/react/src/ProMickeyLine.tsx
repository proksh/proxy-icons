import * as React from "react";
import { IconProps } from "./types";

export const ProMickeyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M18.5 4a2.5 2.5 0 0 0-2.355 3.342l-1.883.673a4.5 4.5 0 1 1 3.088 2.836l.51-1.934A2.505 2.505 0 0 0 21 6.5 2.5 2.5 0 0 0 18.5 4m-13 0a2.5 2.5 0 1 0 .504 4.95l.4 1.959q-.44.09-.904.091a4.5 4.5 0 1 1 4.354-3.36l-1.935-.505q.08-.303.081-.635A2.5 2.5 0 0 0 5.5 4"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProMickeyLine;
