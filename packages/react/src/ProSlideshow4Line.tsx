import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshow4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.83 3H22v18H2V3h6.17A3 3 0 0 1 11 1h2c1.306 0 2.418.835 2.83 2M8.17 5H4v14h16V5h-4.17A3 3 0 0 1 13 7h-2a3 3 0 0 1-2.83-2M10 4a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1"
        />
        <path fill={color} d="M10 15V9l5 3z" />
      </svg>
    );
  },
);

export default ProSlideshow4Line;
