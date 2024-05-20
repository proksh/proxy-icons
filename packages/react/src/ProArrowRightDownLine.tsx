import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 15.586 6.715 5.3 5.301 6.715 15.586 17H7v2h12V7h-2z"
        />
      </svg>
    );
  },
);

export default ProArrowRightDownLine;
