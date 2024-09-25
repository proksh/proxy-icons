import * as React from "react";
import { IconProps } from "./types";

export const ProUserLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M8 14a5 5 0 0 0-5 5v3h2v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3h2v-3a5 5 0 0 0-5-5z"
        />
      </svg>
    );
  },
);

export default ProUserLine;
