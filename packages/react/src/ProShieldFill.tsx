import * as React from "react";
import { IconProps } from "./types";

export const ProShieldFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11.758 1.03-8 2L3 4v12l.4.8 8.6 6.45 8.6-6.45.4-.8V4l-.758-.97-8-2z"
        />
      </svg>
    );
  },
);

export default ProShieldFill;
