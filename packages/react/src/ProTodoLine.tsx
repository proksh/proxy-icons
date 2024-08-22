import * as React from "react";
import { IconProps } from "./types";

export const ProTodoLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M17 11H7V9h10zM7 15h10v-2H7z" />
        <path
          fill={color}
          d="M15 3H9V1H7v2H3v20h18V3h-4V1h-2zM7 7V5H5v16h14V5h-2v2h-2V5H9v2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProTodoLine;
