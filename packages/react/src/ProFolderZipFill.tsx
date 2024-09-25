import * as React from "react";
import { IconProps } from "./types";

export const ProFolderZipFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H16v2h-2v2h2v2h-2v2h2v2h-2v3h4v-5h-2v-2h2V9h-2V7h2V5h4v16H2z"
        />
      </svg>
    );
  },
);

export default ProFolderZipFill;
