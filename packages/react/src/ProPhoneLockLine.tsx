import * as React from "react";
import { IconProps } from "./types";

export const ProPhoneLockLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m5 3 1-1h12l1 1v7h-2V4H7v16h5v2H6l-1-1z" />
        <path
          fill={color}
          d="M22 16v6h-8v-6h1v-1a3 3 0 1 1 6 0v1zm-2 2h-4v2h4zm-1-2v-1a1 1 0 1 0-2 0v1z"
        />
      </svg>
    );
  },
);

export default ProPhoneLockLine;
