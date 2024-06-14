import * as React from "react";
import { IconProps } from "./types";

export const ProPageSeparatorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 3v4h10V3h2v5l-1 1H6L5 8V3zm0 18v-4h10v4h2v-5l-1-1H6l-1 1v5zM21.293 8.293l1.415 1.414L20.415 12l2.293 2.293-1.415 1.414L17.586 12zm-20 1.414 1.414-1.414L6.414 12l-3.707 3.707-1.414-1.414L3.586 12z"
        />
      </svg>
    );
  },
);

export default ProPageSeparatorLine;
