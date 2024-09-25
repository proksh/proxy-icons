import * as React from "react";
import { IconProps } from "./types";

export const ProFolderInfoFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v18h20V5h-9.586l-2-2zm11 6v2h-2V9zm0 3v5h-2v-5z"
        />
      </svg>
    );
  },
);

export default ProFolderInfoFill;
