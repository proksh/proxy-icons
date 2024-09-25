import * as React from "react";
import { IconProps } from "./types";

export const ProCameraFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9.5 12.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0" />
        <path
          fill={color}
          d="M8.965 3h6.07l2 3H22v15H2V6h4.965zM12 8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
        />
      </svg>
    );
  },
);

export default ProCameraFill;
