import * as React from "react";
import { IconProps } from "./types";

export const ProDatabaseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 13H5v2h5zm-5 3h5v2H5zm9-3h5v2h-5zm5-3h-5v2h5zm0 6h-5v2h5z"
        />
        <path
          fill={color}
          d="m11 4 1-1h9l1 1v16l-1 1H3l-1-1V8l1-1h8zm0 5H4v10h7zm9 10V5h-7v14z"
        />
      </svg>
    );
  },
);

export default ProDatabaseLine;
