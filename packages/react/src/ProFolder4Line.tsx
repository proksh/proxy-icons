import * as React from "react";
import { IconProps } from "./types";

export const ProFolder4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m10.414 3 2 2H22v16H2V3zM20 9V7h-8.414l-2-2H4v14h2V9zM8 19h12v-8H8z"
        />
      </svg>
    );
  },
);

export default ProFolder4Line;
