import * as React from "react";
import { IconProps } from "./types";

export const ProArchiveStackFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 3H4v2h16zm0 4H4v2h16zM9.5 11H3v10h18V11h-6.5v2h-5z"
        />
      </svg>
    );
  },
);

export default ProArchiveStackFill;
