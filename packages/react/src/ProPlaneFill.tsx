import * as React from "react";
import { IconProps } from "./types";

export const ProPlaneFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 13.474V19l3 1.5V22l-4.5-1L8 22v-1.5l3-1.5v-5.526L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0v5.447L22 14v2z"
        />
      </svg>
    );
  },
);

export default ProPlaneFill;
