import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutColumnLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 3v18H3V3zm-8 16h6V5h-6zM11 5H5v14h6z" />
      </svg>
    );
  },
);

export default ProLayoutColumnLine;
