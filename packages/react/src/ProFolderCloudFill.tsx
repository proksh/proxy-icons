import * as React from "react";
import { IconProps } from "./types";

export const ProFolderCloudFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5 16a3 3 0 1 1 6 0h.5a2 2 0 1 1 0 4h-7a2 2 0 1 1 0-4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M10.414 3H2v18h8a5.002 5.002 0 0 1 2.105-7.628A6 6 0 0 1 22 12.032V5h-9.586zm7.086 9a4 4 0 0 1 3.88 3.024A3 3 0 0 1 21 21h-7a3 3 0 0 1-.38-5.976A4 4 0 0 1 17.5 12"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFolderCloudFill;
