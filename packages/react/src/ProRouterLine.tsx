import * as React from "react";
import { IconProps } from "./types";

export const ProRouterLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2c4.418 0 8.166 2.864 9.49 6.837l-1.898.632a8.004 8.004 0 0 0-15.183 0L2.51 8.837C3.834 4.864 7.583 2 12 2"
        />
        <path
          fill={color}
          d="M12 6c2.65 0 4.9 1.719 5.694 4.102l-1.898.633a4.002 4.002 0 0 0-7.592 0l-1.898-.633A6 6 0 0 1 12 6m6 8 1 1v6l-1 1H6l-1-1v-6l1-1h5v-3h2v3zM7 16v4h10v-4z"
        />
      </svg>
    );
  },
);

export default ProRouterLine;
