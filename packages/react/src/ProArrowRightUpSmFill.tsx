import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightUpSmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.017 11.434 8.293 8.71 9 7.003h7l1 1v7l-1.707.707-2.724-2.725-3.765 3.765-1.551-1.552z"
        />
      </svg>
    );
  },
);

export default ProArrowRightUpSmFill;
