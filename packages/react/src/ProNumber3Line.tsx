import * as React from "react";
import { IconProps } from "./types";

export const ProNumber3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M14.784 4H6.5V2h12.716l-6.929 7.852c3.306.054 6.213 2.743 6.213 6.327a6.32 6.32 0 0 1-6.321 6.321H11.5a6 6 0 0 1-6-6h2a4 4 0 0 0 4 4h.679a4.32 4.32 0 0 0 4.321-4.321c0-3.017-3.014-5.106-5.839-4.046l-.81.303-1.1-1.598z"
        />
      </svg>
    );
  },
);

export default ProNumber3Line;
