import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutColumnFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 3v18H3V3zm-9 16h7V5h-7z" />
      </svg>
    );
  },
);

export default ProLayoutColumnFill;
