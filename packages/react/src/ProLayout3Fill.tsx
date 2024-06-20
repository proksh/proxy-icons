import * as React from "react";
import { IconProps } from "./types";

export const ProLayout3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 3h18v5H3zm0 7v11h5V10zm7 11h11V10H10z" />
      </svg>
    );
  },
);

export default ProLayout3Fill;
