import * as React from "react";
import { IconProps } from "./types";

export const ProInputMethodFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13.422 13 12 9.443 10.576 13z" />
        <path
          fill={color}
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm10.176 3h-2.354l-4 10h2.154l.8-2h4.446l.8 2h2.154z"
        />
      </svg>
    );
  },
);

export default ProInputMethodFill;
