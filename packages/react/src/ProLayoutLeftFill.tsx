import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 3h13v18H9zM7 3H2v18h5z" />
      </svg>
    );
  },
);

export default ProLayoutLeftFill;
