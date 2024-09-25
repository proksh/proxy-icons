import * as React from "react";
import { IconProps } from "./types";

export const ProSlowDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 13a8 8 0 1 0-13.647 5.667l-1.411 1.417A9.97 9.97 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.97 9.97 0 0 1-2.942 7.084l-1.411-1.417A7.97 7.97 0 0 0 20 13"
        />
        <path fill={color} d="m8.707 8.293 4.5 4.5-1.414 1.414-4.5-4.5z" />
      </svg>
    );
  },
);

export default ProSlowDownLine;
