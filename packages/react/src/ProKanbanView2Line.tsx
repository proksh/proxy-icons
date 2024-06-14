import * as React from "react";
import { IconProps } from "./types";

export const ProKanbanView2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm8 15h4V5h-4zM8 5H4v14h4zm12 14V5h-4v14z"
        />
      </svg>
    );
  },
);

export default ProKanbanView2Line;
