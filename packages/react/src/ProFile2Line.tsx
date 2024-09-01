import * as React from "react";
import { IconProps } from "./types";

export const ProFile2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 2H8.086L3 7.086V22h18zm-2 2v16H5V8h4V4z" />
      </svg>
    );
  },
);

export default ProFile2Line;
