import * as React from "react";
import { IconProps } from "./types";

export const ProLuggageCartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.793 3.207 4 6.414V18l1 1h16v-2H6V6l-.293-.707-3.5-3.5z"
        />
        <path
          fill={color}
          d="m11 4 1-1h4l1 1v2h3l1 1v8l-1 1H8l-1-1V7l1-1h3zm4 1h-2v1h2zM9 8v6h2V8zm6 6V8h-2v6zm2 0h2V8h-2zm3 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProLuggageCartLine;
