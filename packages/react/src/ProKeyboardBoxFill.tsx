import * as React from "react";
import { IconProps } from "./types";

export const ProKeyboardBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm6 3H6v2h2zM6 17h12v-2H6zm0-6v2h2v-2zm7-4h-2v2h2zm-2 4v2h2v-2zm7-4h-2v2h2zm-2 4v2h2v-2z"
        />
      </svg>
    );
  },
);

export default ProKeyboardBoxFill;
