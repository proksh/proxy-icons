import * as React from "react";
import { IconProps } from "./types";

export const ProShapeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 5a3 3 0 0 1 5.83-1h8.34A3.001 3.001 0 1 1 20 7.83v8.34A3.001 3.001 0 1 1 16.17 20H7.83A3.001 3.001 0 1 1 4 16.17V7.83A3 3 0 0 1 2 5m16 11.17V7.83A3 3 0 0 1 16.17 6H7.83A3 3 0 0 1 6 7.83v8.34A3 3 0 0 1 7.83 18h8.34A3 3 0 0 1 18 16.17"
        />
      </svg>
    );
  },
);

export default ProShapeFill;
