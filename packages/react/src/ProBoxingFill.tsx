import * as React from "react";
import { IconProps } from "./types";

export const ProBoxingFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 6a4 4 0 0 1 4-4h10a5 5 0 0 1 5 5v1a3 3 0 0 1-3 3h-6.337A3.5 3.5 0 0 0 9.5 9H5c-.729 0-1.412.195-2 .535zm0 7v4c0 1.306.835 2.418 2 2.83V21l1 1h12l1-1v-1.17A3 3 0 0 0 21 17v-4.416A5 5 0 0 1 19 13h-6.035A3.5 3.5 0 0 1 9.5 16h-5v-2h5a1.5 1.5 0 0 0 0-3H5a2 2 0 0 0-2 2"
        />
      </svg>
    );
  },
);

export default ProBoxingFill;
