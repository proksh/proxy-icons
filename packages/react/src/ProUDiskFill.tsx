import * as React from "react";
import { IconProps } from "./types";

export const ProUDiskFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 2H5v8h14zM9 7V5h2v2zm4-2h2v2h-2zm-9 7-1 1v8l1 1h16l1-1v-8l-1-1z"
        />
      </svg>
    );
  },
);

export default ProUDiskFill;
