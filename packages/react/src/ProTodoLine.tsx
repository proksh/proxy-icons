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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path fill={color} d="M17 11H7V9h10zM7 15h10v-2H7z" />
        <path
          fill={color}
          d="M15 3H9V1H7v2H3v20h18V3h-4V1h-2zM7 7h2V5h6v2h2V5h2v16H5V5h2z"
        />
      </svg>
    );
  },
);

export default ProTodoLine;
