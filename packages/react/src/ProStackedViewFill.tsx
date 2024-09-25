import * as React from "react";
import { IconProps } from "./types";

export const ProStackedViewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2 3 3v11l1 1h16l1-1V3l-1-1zm0 15-1 1v4h18v-4l-1-1z"
        />
      </svg>
    );
  },
);

export default ProStackedViewFill;
