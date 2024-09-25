import * as React from "react";
import { IconProps } from "./types";

export const ProMvFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v18H2zm10 3v6.17A3 3 0 1 0 14 15V8h3V6z" />
      </svg>
    );
  },
);

export default ProMvFill;
