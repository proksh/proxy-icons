import * as React from "react";
import { IconProps } from "./types";

export const ProWindowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4v16l1 1h18l1-1V4l-1-1H3zm2 15v-9h16v9zM7 8H5V6h2zm4 0H9V6h2z"
        />
      </svg>
    );
  },
);

export default ProWindowFill;
