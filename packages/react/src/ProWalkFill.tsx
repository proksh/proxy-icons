import * as React from "react";
import { IconProps } from "./types";

export const ProWalkFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.799 4.042a2 2 0 1 1-3.898-.9 2 2 0 0 1 3.898.9M9.73 15.688l-.943 2.026-2.94 2.528 1.304 1.516 3.267-2.808.939-2.017z"
        />
        <path
          fill={color}
          d="m13.19 17.077.325.21 1.001 5.395 1.967-.364-1.158-6.24-2.005-1.302.896-3.881a5.4 5.4 0 0 0 1.602 1.303c.925.497 1.945.684 2.602.804q.252.045.423.083l.45-1.949c-.243-.056-.477-.1-.705-.142-.623-.117-1.205-.226-1.824-.558-.716-.385-1.486-1.104-1.991-2.718a2 2 0 0 0-3.21-1.185L7.84 8.2l-2.45 3.498 1.638 1.148L9.16 9.8l1.342-.6-1.136 4.918.04.063z"
        />
      </svg>
    );
  },
);

export default ProWalkFill;
