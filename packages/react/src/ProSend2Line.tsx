import * as React from "react";
import { IconProps } from "./types";

export const ProSend2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.49 2.128 3.065 3.356l3.429 9 .934.644H13v-2H8.118l-2.2-5.774L17.96 12 5.93 18.767 7.38 15H5.236l-2.17 5.641 1.424 1.23 16-9v-1.743z"
        />
      </svg>
    );
  },
);

export default ProSend2Line;
