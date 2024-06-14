import * as React from "react";
import { IconProps } from "./types";

export const ProNumber7Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 2v1.215L10.547 22H8.353l8.1-18H6V2z" />
      </svg>
    );
  },
);

export default ProNumber7Line;
