import * as React from "react";
import { IconProps } from "./types";

export const ProFolderTransferLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12.586 12-1.793-1.793 1.414-1.414L16.414 13l-4.207 4.207-1.414-1.414L12.586 14H8v-2z"
        />
        <path
          fill={color}
          d="M2 3h8.414l2 2H22v16H2zm2 2v14h16V7h-8.414l-2-2z"
        />
      </svg>
    );
  },
);

export default ProFolderTransferLine;
