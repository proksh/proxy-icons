import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.004 11.585 17.29 5.3l1.414 1.414L12.42 13l4.292 4.293L16.004 19h-10l-1-1V8l1.707-.707z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftDownFill;
