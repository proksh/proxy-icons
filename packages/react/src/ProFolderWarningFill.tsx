import * as React from "react";
import { IconProps } from "./types";

export const ProFolderWarningFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v18h20V5h-9.586l-2-2zm9 11V9h2v5zm0 3v-2h2v2z"
        />
      </svg>
    );
  },
);

export default ProFolderWarningFill;
