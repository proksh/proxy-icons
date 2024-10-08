import * as React from "react";
import { IconProps } from "./types";

export const ProVirusFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 2h-4v2h1v2.083a6 6 0 0 0-2.477 1.026L7.05 5.636l.707-.707-1.414-1.414-2.828 2.828 1.414 1.414.707-.707 1.473 1.473A6 6 0 0 0 6.083 11H4v-1H2v4h2v-1h2.083a6 6 0 0 0 1.026 2.476L5.636 16.95l-.707-.707-1.414 1.414 2.828 2.828 1.414-1.414-.707-.707 1.473-1.473A6 6 0 0 0 11 17.917V20h-1v2h4v-2h-1v-2.083a6 6 0 0 0 2.476-1.026l1.474 1.473-.708.707 1.415 1.414 2.828-2.828-1.414-1.414-.707.707-1.473-1.473A6 6 0 0 0 17.917 13H20v1h2v-4h-2v1h-2.083a6 6 0 0 0-1.026-2.477l1.473-1.473.707.707 1.414-1.414-2.828-2.828-1.415 1.414.707.707-1.473 1.473A6 6 0 0 0 13 6.083V4h1zm-3 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3 1.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2 .5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        />
      </svg>
    );
  },
);

export default ProVirusFill;
