import * as React from "react";
import { IconProps } from "./types";

export const ProAngularjsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13.548 12.5 12 8.983 10.453 12.5z" />
        <path
          fill={color}
          d="m12 1.932-9.065 3.4L4.051 17.61 12 22.152l7.949-4.542 1.116-12.28zM17.713 17h-2.185l-1.1-2.5H9.573l-1.1 2.5H6.288L12 4.017z"
        />
      </svg>
    );
  },
);

export default ProAngularjsFill;
