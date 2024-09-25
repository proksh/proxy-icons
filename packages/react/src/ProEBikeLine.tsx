import * as React from "react";
import { IconProps } from "./types";

export const ProEBikeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.983 7.665c.419-.469.73-1.037.891-1.665H19V4h-3.126a4.002 4.002 0 0 0-7.748 0H5v2h3.126a4 4 0 0 0 .891 1.665A7 7 0 0 0 5 14v7h4.17a3.001 3.001 0 0 0 5.66 0H19v-7a7 7 0 0 0-4.017-6.335M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m5 14v-4a3 3 0 1 0-6 0v4H7v-5a5 5 0 0 1 10 0v5zm-4-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0z"
        />
      </svg>
    );
  },
);

export default ProEBikeLine;
