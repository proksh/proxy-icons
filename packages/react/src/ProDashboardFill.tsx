import * as React from "react";
import { IconProps } from "./types";

export const ProDashboardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v8l1 1h6l1-1V4l-1-1zm10 0-1 1v4l1 1h6l1-1V4l-1-1zM4 15l-1 1v4l1 1h6l1-1v-4l-1-1zm10-4-1 1v8l1 1h6l1-1v-8l-1-1z"
        />
      </svg>
    );
  },
);

export default ProDashboardFill;
