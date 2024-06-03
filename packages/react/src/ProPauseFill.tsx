import * as React from "react";
import { IconProps } from "./types";

export const ProPauseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15.5 19V5h3v14zm-10 0V5h3v14z" />
      </svg>
    );
  },
);

export default ProPauseFill;
