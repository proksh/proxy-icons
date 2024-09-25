import * as React from "react";
import { IconProps } from "./types";

export const ProPencilRulerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 6.63 7 1.963 3 6.63V22h8zM5 20V7.5h4V20zM21 4h-8v18h8zm-2 8h-3v2h3v2h-2v2h2v2h-4V6h4v2h-2v2h2z"
        />
      </svg>
    );
  },
);

export default ProPencilRulerLine;
