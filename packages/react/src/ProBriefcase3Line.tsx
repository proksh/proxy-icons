import * as React from "react";
import { IconProps } from "./types";

export const ProBriefcase3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 1 7 2v3H3L2 6v14l1 1h18l1-1V6l-1-1h-4V2l-1-1zm7 4V3H9v2zM9 7h6v12H9zM7 7v12H4V7zm10 12V7h3v12z"
        />
      </svg>
    );
  },
);

export default ProBriefcase3Line;
