import * as React from "react";
import { IconProps } from "./types";

export const ProFolderSharedFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v9.964l-3.232-3.232-3.536 3.536.733.732H13v5H2z"
        />
        <path
          fill={color}
          d="m19.586 17.5-1.793-1.793 1.414-1.414 4.207 4.207-4.207 4.207-1.414-1.414 1.793-1.793H15v-2z"
        />
      </svg>
    );
  },
);

export default ProFolderSharedFill;
