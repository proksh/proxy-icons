import * as React from "react";
import { IconProps } from "./types";

export const ProBringForwardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M17 3H3v14h6v4h12V9h-4zM5 15V5h10v10z" />
      </svg>
    );
  },
);

export default ProBringForwardFill;
