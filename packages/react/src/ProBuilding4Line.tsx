import * as React from "react";
import { IconProps } from "./types";

export const ProBuilding4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 6h4v2H7zm4 4H7v2h4zm-4 4h4v2H7zm10-8h-4v2h4zm-4 4h4v2h-4zm4 4h-4v2h4z"
        />
        <path fill={color} d="M21 2H3v18H1v2h22v-2h-2zM5 20V4h14v16z" />
      </svg>
    );
  },
);

export default ProBuilding4Line;
