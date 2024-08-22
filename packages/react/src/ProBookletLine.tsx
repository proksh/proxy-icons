import * as React from "react";
import { IconProps } from "./types";

export const ProBookletLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2h17l1 1v18l-1 1H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2zm2 2v16h2V4zm4 0v16h10V4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProBookletLine;
