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
        {...props}
        ref={forwardedRef}
      >
        <path fill={color} d="M18 13v5h-4v-3h2v-2zm-2-2v2h-2v-2zm0-2h2v2h-2z" />
        <path
          fill={color}
          d="m10.414 3 2 2H22v16H2V3zM16 9V7h4v12H4V5h5.586l2 2H14v2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFolderZipLine;
