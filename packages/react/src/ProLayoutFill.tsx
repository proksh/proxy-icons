import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 3H3v5h18zm0 7h-5v11h5zm-7 11V10H3v11z" />
      </svg>
    );
  },
);

export default ProLayoutFill;
