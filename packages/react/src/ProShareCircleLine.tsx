import * as React from "react";
import { IconProps } from "./types";

export const ProShareCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 5a7 7 0 1 0 7 7h2a9 9 0 1 1-9-9z" />
        <path
          fill={color}
          d="M14 3h6l1 1v6h-2V6.414l-6.793 6.793-1.414-1.414L17.586 5H14z"
        />
      </svg>
    );
  },
);

export default ProShareCircleLine;
