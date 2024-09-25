import * as React from "react";
import { IconProps } from "./types";

export const ProTimelineViewLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M6 9h8V7H6zm10 4H8v-2h8zm-6 2v2h8v-2z" />
        <path fill={color} d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm1 16V5h16v14z" />
      </svg>
    );
  },
);

export default ProTimelineViewLine;
