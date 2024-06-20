import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutBottomLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M22 3v18H2V3zm-2 11V5H4v9zM4 16v3h16v-3z" />
      </svg>
    );
  },
);

export default ProLayoutBottomLine;
