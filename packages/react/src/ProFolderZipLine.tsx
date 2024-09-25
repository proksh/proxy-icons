import * as React from "react";
import { IconProps } from "./types";

export const ProFolderZipLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M18 13v5h-4v-3h2v-2zm-2-2v2h-2v-2zm0-2h2v2h-2z" />
        <path
          fill={color}
          d="m10.414 3 2 2H22v16H2V3zM16 9h-2V7h-2.414l-2-2H4v14h16V7h-4z"
        />
      </svg>
    );
  },
);

export default ProFolderZipLine;
