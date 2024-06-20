import * as React from "react";
import { IconProps } from "./types";

export const ProTBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 8h10v2h-4v7h-2v-7H7z" />
        <path fill={color} d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm2 1v14h14V5z" />
      </svg>
    );
  },
);

export default ProTBoxLine;
