import * as React from "react";
import { IconProps } from "./types";

export const ProCloudyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 3a7 7 0 0 1 6.327 4.002L17.5 7a6.5 6.5 0 0 1 6.495 6.755Q24 13.877 24 14a6 6 0 0 1-6 6H5.5A5.5 5.5 0 0 1 4.046 9.195 7 7 0 0 1 11 3"
        />
      </svg>
    );
  },
);

export default ProCloudyFill;
