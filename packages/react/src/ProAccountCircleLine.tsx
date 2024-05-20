import * as React from "react";
import { IconProps } from "./types";

export const ProAccountCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M19.171 18.97A9.97 9.97 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.97 9.97 0 0 0 7.171-3.03M12 4a8 8 0 0 0-6.454 12.728A8.98 8.98 0 0 1 12 14a8.98 8.98 0 0 1 6.454 2.728A8 8 0 0 0 12 4m5.078 14.182A6.98 6.98 0 0 0 12 16a6.98 6.98 0 0 0-5.078 2.182A7.96 7.96 0 0 0 12 20a7.97 7.97 0 0 0 5.078-1.818"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAccountCircleLine;
