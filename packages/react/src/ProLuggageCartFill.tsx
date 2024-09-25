import * as React from "react";
import { IconProps } from "./types";

export const ProLuggageCartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 6.414.793 3.207l1.414-1.414 3.5 3.5L6 6v11h15v2H5l-1-1z"
        />
        <path
          fill={color}
          d="m12 3-1 1v2H8L7 7v8l1 1h12l1-1V7l-1-1h-3V4l-1-1zm3 3h-2V5h2zm-5 8V8h2v6zm6 0V8h2v6zm4 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProLuggageCartFill;
