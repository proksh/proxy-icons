import * as React from "react";
import { IconProps } from "./types";

export const ProFolderChart2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.326 15.222A4 4 0 0 0 16 13h-4V9a4 4 0 1 0 3.326 6.222"
        />
        <path
          fill={color}
          d="M10.414 3H2v18h20V5h-9.586zM4 19V5h5.586l2 2H20v12z"
        />
      </svg>
    );
  },
);

export default ProFolderChart2Line;
