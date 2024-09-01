import * as React from "react";
import { IconProps } from "./types";

export const ProFolderAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v18h20V5h-9.586l-2-2zm11 6v3h3v2h-3v3h-2v-3H8v-2h3V9z"
        />
      </svg>
    );
  },
);

export default ProFolderAddFill;
