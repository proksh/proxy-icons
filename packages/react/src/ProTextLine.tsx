import * as React from "react";
import { IconProps } from "./types";

export const ProTextLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 21V6H5V4h14v2h-6v15z" />
      </svg>
    );
  },
);

export default ProTextLine;
