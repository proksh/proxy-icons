import * as React from "react";
import { IconProps } from "./types";

export const ProUserHeartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M8 14a5 5 0 0 0-5 5v3h13.869l-2.291-2.272a3.633 3.633 0 0 1 0-5.165q.338-.334.732-.563z"
        />
        <path
          fill={color}
          d="m18.694 15.628.306.304.306-.304a2.177 2.177 0 0 1 3.06 0 2.133 2.133 0 0 1 0 3.035L19 22l-3.366-3.337a2.133 2.133 0 0 1 0-3.035 2.177 2.177 0 0 1 3.06 0"
        />
      </svg>
    );
  },
);

export default ProUserHeartFill;
