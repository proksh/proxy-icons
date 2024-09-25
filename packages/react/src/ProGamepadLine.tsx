import * as React from "react";
import { IconProps } from "./types";

export const ProGamepadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 11v2h2v2h2v-2h2v-2h-2V9H8v2zm8-2h2v2h-2zm2 4v2h2v-2z"
        />
        <path
          fill={color}
          d="M1 10a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6zm6-4a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4z"
        />
      </svg>
    );
  },
);

export default ProGamepadLine;
