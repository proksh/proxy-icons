import * as React from "react";
import { IconProps } from "./types";

export const ProBriefcase4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 1 7 2v3H3L2 6v14l1 1h18l1-1V6l-1-1h-4V2l-1-1zm7 4H9V3h6zM4 7h16v4h-5V9H9v2H4zm0 12v-6h5v2h6v-2h5v6zm7-8h2v2h-2z"
        />
      </svg>
    );
  },
);

export default ProBriefcase4Line;
