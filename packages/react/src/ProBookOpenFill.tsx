import * as React from "react";
import { IconProps } from "./types";

export const ProBookOpenFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h5a3 3 0 0 1 3 3v15H3l-1-1zm11 17h-2v2h2zm0 0V6a3 3 0 0 1 3-3h5l1 1v16l-1 1z"
        />
      </svg>
    );
  },
);

export default ProBookOpenFill;
