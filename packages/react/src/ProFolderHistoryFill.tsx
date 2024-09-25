import * as React from "react";
import { IconProps } from "./types";

export const ProFolderHistoryFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h8.414l2 2H22v16H2zm11 6h-2v6h5v-2h-3z" />
      </svg>
    );
  },
);

export default ProFolderHistoryFill;
