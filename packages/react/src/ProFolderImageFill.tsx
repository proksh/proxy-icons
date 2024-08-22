import * as React from "react";
import { IconProps } from "./types";

export const ProFolderImageFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v16H2zm8 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5.5 4.5 6H7z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFolderImageFill;
