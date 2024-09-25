import * as React from "react";
import { IconProps } from "./types";

export const ProUnlockPasswordFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 1a5 5 0 0 0-5 5v1h2V6a3 3 0 0 1 6 0v3H4v13h16V9H10V6a5 5 0 0 0-5-5m4.5 16h-2v-2h2zm1.5 0v-2h2v2zm5.5 0h-2v-2h2z"
        />
      </svg>
    );
  },
);

export default ProUnlockPasswordFill;
