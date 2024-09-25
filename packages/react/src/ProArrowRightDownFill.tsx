import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 11.586 6.715 5.3 5.301 6.715 11.586 13l-4.293 4.293L8 19h10l1-1V8l-1.707-.707z"
        />
      </svg>
    );
  },
);

export default ProArrowRightDownFill;
