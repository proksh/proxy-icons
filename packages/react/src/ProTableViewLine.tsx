import * as React from "react";
import { IconProps } from "./types";

export const ProTableViewLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm17 11H10v-4h10zM8 14H4v-4h4zm-4 2h4v3H4zm6 0h10v3H10zM4 8V5h4v3zm6 0V5h10v3z"
        />
      </svg>
    );
  },
);

export default ProTableViewLine;
