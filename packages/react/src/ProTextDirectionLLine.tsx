import * as React from "react";
import { IconProps } from "./types";

export const ProTextDirectionLLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 3v2h-2v10h-2V5h-2v10H9v-4a4 4 0 1 1 0-8zM9 5a2 2 0 1 0 0 4z"
        />
        <path
          fill={color}
          d="m15.793 15.707 1.414-1.414L20.914 18l-3.707 3.707-1.414-1.414L17.086 19H5v-2h12.086z"
        />
      </svg>
    );
  },
);

export default ProTextDirectionLLine;
