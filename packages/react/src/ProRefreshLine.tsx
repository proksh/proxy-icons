import * as React from "react";
import { IconProps } from "./types";

export const ProRefreshLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.737 5.974a8.002 8.002 0 0 1 13.202 5.028H17.92l-.876 1.482 2.168 3.945 1.775-.043a10 10 0 0 0-4.604-13.372 10 10 0 0 0-10.96 1.453zm-1.95 1.599-1.775.043a10 10 0 0 0 4.604 13.372 10 10 0 0 0 10.962-1.453l-1.315-1.507A8.002 8.002 0 0 1 4.062 13H6.08l.876-1.482z"
        />
      </svg>
    );
  },
);

export default ProRefreshLine;
