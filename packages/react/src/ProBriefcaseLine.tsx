import * as React from "react";
import { IconProps } from "./types";

export const ProBriefcaseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 11h-2v2h2z" />
        <path
          fill={color}
          d="M7 2v3H3L2 6v14l1 1h18l1-1V6l-1-1h-4V2l-1-1H8zm8 1v2H9V3zM4 7h16v7H4zm0 9h16v3H4z"
        />
      </svg>
    );
  },
);

export default ProBriefcaseLine;
