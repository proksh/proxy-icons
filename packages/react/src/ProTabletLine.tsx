import * as React from "react";
import { IconProps } from "./types";

export const ProTabletLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <path fill={color} d="M20 2H4v20h16zM6 20V4h12v16z" />
      </svg>
    );
  },
);

export default ProTabletLine;
