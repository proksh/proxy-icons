import * as React from "react";
import { IconProps } from "./types";

export const ProSlackFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5 2.5a2 2 0 0 0-2 2v5a2 2 0 1 0 4 0v-5a2 2 0 0 0-2-2m-5 10a2 2 0 0 0-2 2v5a2 2 0 1 0 4 0v-5a2 2 0 0 0-2-2m3 2a2 2 0 0 0 2 2h5a2 2 0 1 0 0-4h-5a2 2 0 0 0-2 2m-10-5a2 2 0 0 0 2 2h5a2 2 0 1 0 0-4h-5a2 2 0 0 0-2 2m7-7a2 2 0 1 0 0 4h2v-2a2 2 0 0 0-2-2m10 5a2 2 0 1 1 0 4h-2v-2a2 2 0 0 1 2-2m-5 14a2 2 0 1 0 0-4h-2v2a2 2 0 0 0 2 2m-10-5a2 2 0 1 1 0-4h2v2a2 2 0 0 1-2 2"
        />
      </svg>
    );
  },
);

export default ProSlackFill;
