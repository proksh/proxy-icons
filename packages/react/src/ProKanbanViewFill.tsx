import * as React from "react";
import { IconProps } from "./types";

export const ProKanbanViewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm4.5 11h2V7h-2zM11 7v10h2V7zm4.5 0v6h2V7z"
        />
      </svg>
    );
  },
);

export default ProKanbanViewFill;
