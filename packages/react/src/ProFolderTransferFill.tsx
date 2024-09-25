import * as React from "react";
import { IconProps } from "./types";

export const ProFolderTransferFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v16H2zm10.004 8.75H8v2.5h4.004V17L16 13.01 12.004 9z"
        />
      </svg>
    );
  },
);

export default ProFolderTransferFill;
