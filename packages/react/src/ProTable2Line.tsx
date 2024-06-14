import * as React from "react";
import { IconProps } from "./types";

export const ProTable2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v16l1 1h16l1-1V4l-1-1zm15 5h-6V5h6zm-8 0H5V5h6zm-6 2h6v4H5zm8 0h6v4h-6zm6 9h-6v-3h6zm-8 0H5v-3h6z"
        />
      </svg>
    );
  },
);

export default ProTable2Line;
