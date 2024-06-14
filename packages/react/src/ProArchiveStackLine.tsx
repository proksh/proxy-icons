import * as React from "react";
import { IconProps } from "./types";

export const ProArchiveStackLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 3H4v2h16zM4 7h16v2H4zm-1 4h6.5v2h5v-2H21v10H3zm13.5 2v2h-9v-2H5v6h14v-6z"
        />
      </svg>
    );
  },
);

export default ProArchiveStackLine;
