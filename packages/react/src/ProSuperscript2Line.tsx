import * as React from "react";
import { IconProps } from "./types";

export const ProSuperscript2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 5.25a.75.75 0 0 0-.75.75v.25h-1.5V6A2.25 2.25 0 0 1 19 3.75h.086a2.164 2.164 0 0 1 1.53 3.695L19.311 8.75h1.939v1.5H17V8.94l2.555-2.556a.664.664 0 0 0-.47-1.134zM16 7h-6v13H8V7H2V5h14z"
        />
      </svg>
    );
  },
);

export default ProSuperscript2Line;
