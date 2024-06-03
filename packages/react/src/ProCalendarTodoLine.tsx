import * as React from "react";
import { IconProps } from "./types";

export const ProCalendarTodoLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 13.5v-2h2v2zm4 0h8v-2h-8zm-4 4v-2h2v2zm4 0h4v-2h-4z"
        />
        <path
          fill={color}
          d="M2 3v18h20V3h-5V1h-2v2H9V1H7v2zm5 2v1h2V5h6v1h2V5h3v3H4V5zm13 5v9H4v-9z"
        />
      </svg>
    );
  },
);

export default ProCalendarTodoLine;
