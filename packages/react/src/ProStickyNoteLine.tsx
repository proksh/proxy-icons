import * as React from "react";
import { IconProps } from "./types";

export const ProStickyNoteLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 21V3h18v12.08L15.08 21zm10-2H5V5h14v8h-5l-1 1zm2-.747L18.253 15H15z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProStickyNoteLine;
