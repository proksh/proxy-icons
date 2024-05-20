import * as React from "react";
import { IconProps } from "./types";

export const ProAccountBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm6 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m1 4.5a4 4 0 0 0-4 4h12a4 4 0 0 0-4-4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAccountBoxFill;
