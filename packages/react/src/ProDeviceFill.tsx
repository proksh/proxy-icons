import * as React from "react";
import { IconProps } from "./types";

export const ProDeviceFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m3 3 1-1h14l1 1v3.5h-7L10.5 8v12H4l-1-1z" />
        <path fill={color} d="m13 8-1 1v12l1 1h8l1-1V9l-1-1z" />
      </svg>
    );
  },
);

export default ProDeviceFill;
