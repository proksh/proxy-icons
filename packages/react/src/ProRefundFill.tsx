import * as React from "react";
import { IconProps } from "./types";

export const ProRefundFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v4H2zm0 6v12h20V9zm9.996 9.5L8 14.49l3.996-3.99v2.75H16v2.5h-4.004z"
        />
      </svg>
    );
  },
);

export default ProRefundFill;
