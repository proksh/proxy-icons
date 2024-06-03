import * as React from "react";
import { IconProps } from "./types";

export const ProSmartphoneFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 2h14v20H5zm7 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      </svg>
    );
  },
);

export default ProSmartphoneFill;
