import * as React from "react";
import { IconProps } from "./types";

export const ProLayout6Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M22 3H2v5h20zm0 7h-6v11h6zm-8 11V10H2v11z" />
      </svg>
    );
  },
);

export default ProLayout6Fill;
