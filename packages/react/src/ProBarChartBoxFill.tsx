import * as React from "react";
import { IconProps } from "./types";

export const ProBarChartBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v18H2zm9 14h2V7h-2zm4-7v7h2v-7zm-8 3v4h2v-4z"
        />
      </svg>
    );
  },
);

export default ProBarChartBoxFill;
