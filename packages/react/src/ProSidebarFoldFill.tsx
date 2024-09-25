import * as React from "react";
import { IconProps } from "./types";

export const ProSidebarFoldFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5 3h-12v18h12zM10 9.5v5L7 12zM16.5 3v18h5V3z"
        />
      </svg>
    );
  },
);

export default ProSidebarFoldFill;
