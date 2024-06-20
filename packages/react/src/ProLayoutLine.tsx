import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 3v18H3V3zm-5 16h3v-9h-3zm-2-9H5v9h9zM5 8h14V5H5z"
        />
      </svg>
    );
  },
);

export default ProLayoutLine;
