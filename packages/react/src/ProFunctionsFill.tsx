import * as React from "react";
import { IconProps } from "./types";

export const ProFunctionsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 20.5h14v-3H9.372l7.072-5.5-7.072-5.5H19v-3H5v3.4l6.557 5.1L5 17.1z"
        />
      </svg>
    );
  },
);

export default ProFunctionsFill;
