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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M12 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4M8 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m-1.078 9.182A7.96 7.96 0 0 0 12 20a7.96 7.96 0 0 0 5.078-1.818A6.98 6.98 0 0 0 12 16a6.98 6.98 0 0 0-5.078 2.182m-2.183-.501A8.99 8.99 0 0 1 12 14a8.99 8.99 0 0 1 7.262 3.68l-.09 1.29A9.97 9.97 0 0 1 12 22a9.97 9.97 0 0 1-7.171-3.03z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAccountCircleLine;
