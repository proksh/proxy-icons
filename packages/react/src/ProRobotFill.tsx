import * as React from "react";
import { IconProps } from "./types";

export const ProRobotFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 3.5h-1V5h6l1 1v14l-1 1H5l-1-1V6l1-1h6V3.5h-1v-3h4zM10.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m6 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7-3h-2v6h2zm-23 6v-6h2v6z"
        />
      </svg>
    );
  },
);

export default ProRobotFill;
