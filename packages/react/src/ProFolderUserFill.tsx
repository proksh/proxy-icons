import * as React from "react";
import { IconProps } from "./types";

export const ProFolderUserFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v16H2zm7.5 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m.5 3.5a3 3 0 0 0-3 3h10a3 3 0 0 0-3-3z"
        />
      </svg>
    );
  },
);

export default ProFolderUserFill;
