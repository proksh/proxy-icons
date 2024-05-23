import * as React from "react";
import { IconProps } from "./types";

export const ProShieldUserFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3.757 3.03 8-2h.486l8 2L21 4v12l-.4.8-8.6 6.45-8.6-6.45L3 16V4zM14.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M8 14a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5H8z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProShieldUserFill;
