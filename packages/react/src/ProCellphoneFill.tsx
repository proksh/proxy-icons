import * as React from "react";
import { IconProps } from "./types";

export const ProCellphoneFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 1.5V22l1 1h12l1-1V4l-1-1H7V1.5zM7 10V5h10v5z"
        />
      </svg>
    );
  },
);

export default ProCellphoneFill;
