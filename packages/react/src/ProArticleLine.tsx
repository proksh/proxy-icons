import * as React from "react";
import { IconProps } from "./types";

export const ProArticleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 6h4v4H7zm0 8h10v-2H7zm10-5h-4V7h4zM7 18h10v-2H7z"
        />
        <path fill={color} d="M3 2h18v20H3zm2 2v16h14V4z" />
      </svg>
    );
  },
);

export default ProArticleLine;
