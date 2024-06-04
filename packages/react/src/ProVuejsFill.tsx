import * as React from "react";
import { IconProps } from "./types";

export const ProVuejsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M1.001 3h4l7 12 7-12h4l-11 19zm8.667 0L12 7l2.333-4h4.035L12 14 5.633 3z"
        />
      </svg>
    );
  },
);

export default ProVuejsFill;
