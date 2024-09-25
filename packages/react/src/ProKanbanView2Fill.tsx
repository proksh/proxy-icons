import * as React from "react";
import { IconProps } from "./types";

export const ProKanbanView2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h4.5v18H3l-1-1zm7.5 17h5V3h-5zm7-18v18H21l1-1V4l-1-1z"
        />
      </svg>
    );
  },
);

export default ProKanbanView2Fill;
