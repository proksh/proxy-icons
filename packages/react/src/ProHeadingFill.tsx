import * as React from "react";
import { IconProps } from "./types";

export const ProHeadingFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M4.5 21V4h3v6.5h9V4h3v17h-3v-7.5h-9V21z" />
      </svg>
    );
  },
);

export default ProHeadingFill;
