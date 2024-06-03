import * as React from "react";
import { IconProps } from "./types";

export const ProSmartphoneLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 2H5v20h14zM7 20V4h10v16z" />
      </svg>
    );
  },
);

export default ProSmartphoneLine;
