import * as React from "react";
import { IconProps } from "./types";

export const ProParentLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M4.5 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m13 .5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M2 17a5 5 0 0 1 10 0v4h-2v-4a3 3 0 1 0-6 0v4H2zm15.5-1a4.5 4.5 0 0 0-4.5 4.5v.5h2v-.5a2.5 2.5 0 0 1 5 0v.5h2v-.5a4.5 4.5 0 0 0-4.5-4.5"
        />
      </svg>
    );
  },
);

export default ProParentLine;
