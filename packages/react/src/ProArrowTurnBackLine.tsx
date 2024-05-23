import * as React from "react";
import { IconProps } from "./types";

export const ProArrowTurnBackLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 16.586V9a3 3 0 1 1 6 0v5h2V9A5 5 0 0 0 9 9v7.586l-2.293-2.293-1.414 1.414L10 20.414l4.707-4.707-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProArrowTurnBackLine;
