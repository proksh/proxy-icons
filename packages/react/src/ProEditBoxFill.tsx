import * as React from "react";
import { IconProps } from "./types";

export const ProEditBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m20.4 2-9.193 9.192v1.415h1.414l9.193-9.193z" />
        <path
          fill={color}
          d="M9.207 10.364 16.571 3H4L3 4v16l1 1h16l1-1V7.056l-7.55 7.55H9.207z"
        />
      </svg>
    );
  },
);

export default ProEditBoxFill;
