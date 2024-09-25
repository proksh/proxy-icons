import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutLeftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v18H2zm5 2H4v14h3zm2 14h11V5H9z" />
      </svg>
    );
  },
);

export default ProLayoutLeftLine;
