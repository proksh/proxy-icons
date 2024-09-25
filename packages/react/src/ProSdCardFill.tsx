import * as React from "react";
import { IconProps } from "./types";

export const ProSdCardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.793 2.293 9.5 2H19l1 1v18l-1 1H5l-1-1V7.5l.293-.707zM12 5v4h2V5zM9 6v3h2V6zm6 3h2V5h-2z"
        />
      </svg>
    );
  },
);

export default ProSdCardFill;
