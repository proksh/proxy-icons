import * as React from "react";
import { IconProps } from "./types";

export const ProCloudFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.5 3a7 7 0 0 1 6.94 6.073A6.001 6.001 0 0 1 17.5 21H6a5.5 5.5 0 0 1-1.497-10.794L4.5 10a7 7 0 0 1 7-7"
        />
      </svg>
    );
  },
);

export default ProCloudFill;
