import * as React from "react";
import { IconProps } from "./types";

export const ProKeyboardBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 17h12v-2H6zM6 7h2v2H6zm2 4H6v2h2zm3-4h2v2h-2zm2 4h-2v2h2zm3-4h2v2h-2zm2 4h-2v2h2z"
        />
        <path fill={color} d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm1 16V5h16v14z" />
      </svg>
    );
  },
);

export default ProKeyboardBoxLine;
