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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M3 21V3h18v12.08L15.08 21zm10-2v-5l1-1h5V5H5v14zm2-.747L18.253 15H15z"
        />
      </svg>
    );
  },
);

export default ProStickyNoteLine;
