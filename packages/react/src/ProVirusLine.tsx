import * as React from "react";
import { IconProps } from "./types";

export const ProVirusLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 .5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-4 2.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        />
        <path
          fill={color}
          d="M14 2v2h-1v2.083a6 6 0 0 1 2.476 1.026l1.473-1.473-.707-.707 1.415-1.414 2.828 2.828-1.414 1.414-.707-.707-1.473 1.473A6 6 0 0 1 17.917 11H20v-1h2v4h-2v-1h-2.083a6 6 0 0 1-1.026 2.476l1.473 1.474.707-.707 1.414 1.414-2.828 2.828-1.415-1.414.708-.707-1.473-1.473A6 6 0 0 1 13 17.917V20h1v2h-4v-2h1v-2.083a6 6 0 0 1-2.477-1.026L7.05 18.364l.707.707-1.414 1.414-2.828-2.828 1.414-1.414.707.707 1.473-1.474A6 6 0 0 1 6.083 13H4v1H2v-4h2v1h2.083a6 6 0 0 1 1.026-2.477L5.636 7.05l-.707.707-1.414-1.414 2.828-2.828 1.414 1.414-.707.707 1.473 1.473A6 6 0 0 1 11 6.083V4h-1V2zm-2 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        />
      </svg>
    );
  },
);

export default ProVirusLine;
