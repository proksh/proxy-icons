import * as React from "react";
import { IconProps } from "./types";

export const ProDatabaseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11 4 1-1h9l1 1v16l-1 1H3l-1-1V8l1-1h8zm8 6h-5v2h5zM5 13v2h5v-2zm14 0h-5v2h5zM5 16v2h5v-2zm9 0v2h5v-2z"
        />
      </svg>
    );
  },
);

export default ProDatabaseFill;
