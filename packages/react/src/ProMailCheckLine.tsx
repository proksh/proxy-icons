import * as React from "react";
import { IconProps } from "./types";

export const ProMailCheckLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v11.5h-2V7.227l-8 7.111-8-7.111V19h9v2H2zm2.505 2L12 11.662 19.495 5z"
        />
        <path
          fill={color}
          d="M23.707 17.207 18 22.914l-3.707-3.707 1.414-1.414L18 20.086l4.293-4.293z"
        />
      </svg>
    );
  },
);

export default ProMailCheckLine;
