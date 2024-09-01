import * as React from "react";
import { IconProps } from "./types";

export const ProFolderVideoFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v18h20V5h-9.586l-2-2zm7.5 7 .757-.429 5 3v.858l-5 3L9.5 16z"
        />
      </svg>
    );
  },
);

export default ProFolderVideoFill;
