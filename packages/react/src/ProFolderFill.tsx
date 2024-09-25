import * as React from "react";
import { IconProps } from "./types";

export const ProFolderFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10.414 3H2v18h20V5h-9.586z" />
      </svg>
    );
  },
);

export default ProFolderFill;
