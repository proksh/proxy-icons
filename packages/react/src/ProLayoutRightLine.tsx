import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutRightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v18H2zm13 2H4v14h11zm2 14h3V5h-3z" />
      </svg>
    );
  },
);

export default ProLayoutRightLine;
