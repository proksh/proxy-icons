import * as React from "react";
import { IconProps } from "./types";

export const ProFolderUploadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v16H2zm11.25 9.996H16L11.99 9 8 12.996h2.75V17h2.5z"
        />
      </svg>
    );
  },
);

export default ProFolderUploadFill;
