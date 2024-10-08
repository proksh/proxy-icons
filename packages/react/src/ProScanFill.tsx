import * as React from "react";
import { IconProps } from "./types";

export const ProScanFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2c-2.295 0-4.41.773-6.098 2.074l7.512 7.512L12 13 4.446 5.447A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10"
        />
      </svg>
    );
  },
);

export default ProScanFill;
