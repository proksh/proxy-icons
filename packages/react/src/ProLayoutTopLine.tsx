import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutTopLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M22 3v18H2V3zm-2 5V5H4v3zM4 10v9h16v-9z" />
      </svg>
    );
  },
);

export default ProLayoutTopLine;
