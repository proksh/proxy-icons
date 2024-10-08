import * as React from "react";
import { IconProps } from "./types";

export const ProCamera2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M19 6h-2v2h2z"
        />
        <path fill={color} d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm2 1v14h16V5z" />
      </svg>
    );
  },
);

export default ProCamera2Line;
