import * as React from "react";
import { IconProps } from "./types";

export const ProHeadingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 21V4h2v7h10V4h2v17h-2v-8H7v8z" />
      </svg>
    );
  },
);

export default ProHeadingLine;
