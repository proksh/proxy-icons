import * as React from "react";
import { IconProps } from "./types";

export const ProKanbanViewLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 7v10h2V7zm4.5 6V7h2v6zm-9-6v8h2V7z" />
        <path fill={color} d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm1 16V5h16v14z" />
      </svg>
    );
  },
);

export default ProKanbanViewLine;
