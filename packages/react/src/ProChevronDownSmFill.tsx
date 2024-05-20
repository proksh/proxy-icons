import * as React from "react";
import { IconProps } from "./types";

export const ProChevronDownSmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m8 9.5-.707 1.707 4 4h1.414l4-4L16 9.5z" />
      </svg>
    );
  },
);

export default ProChevronDownSmFill;
