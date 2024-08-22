import * as React from "react";
import { IconProps } from "./types";

export const ProBookOpenLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h6a4 4 0 0 1 3 1.354A4 4 0 0 1 15 3h6l1 1v16l-1 1h-8v2h-2v-2H3l-1-1zm7 1a2 2 0 0 1 2 2v12H4V5zm11 14h-7V7a2 2 0 0 1 2-2h5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProBookOpenLine;
