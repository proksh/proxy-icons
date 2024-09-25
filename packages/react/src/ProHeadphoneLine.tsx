import * as React from "react";
import { IconProps } from "./types";

export const ProHeadphoneLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3a6 6 0 0 0-6 6H3l-1 1v6l1 1h4l1-1V9a4 4 0 1 1 8 0v8a2 2 0 0 1-2 2v-1h-4v3h4a4 4 0 0 0 4-4h3l1-1v-6l-1-1h-3a6 6 0 0 0-6-6m6 12v-4h2v4zM4 11h2v4H4z"
        />
      </svg>
    );
  },
);

export default ProHeadphoneLine;
