import * as React from "react";
import { IconProps } from "./types";

export const ProLockPasswordLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 15v2h2v-2zm5.5 2h-2v-2h2zm-9 0h2v-2h-2z" />
        <path
          fill={color}
          d="M7 7a5 5 0 0 1 10 0v2h3v13H4V9h3zm8 0a3 3 0 1 0-6 0v2h6zM6 20h12v-9H6z"
        />
      </svg>
    );
  },
);

export default ProLockPasswordLine;
