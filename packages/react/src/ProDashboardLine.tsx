import * as React from "react";
import { IconProps } from "./types";

export const ProDashboardLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v8l1 1h6l1-1V4l-1-1zm1 8V5h4v6zm9-8-1 1v4l1 1h6l1-1V4l-1-1zm1 4V5h4v2zM3 16l1-1h6l1 1v4l-1 1H4l-1-1zm2 1v2h4v-2zm9-6-1 1v8l1 1h6l1-1v-8l-1-1zm5 8h-4v-6h4z"
        />
      </svg>
    );
  },
);

export default ProDashboardLine;
