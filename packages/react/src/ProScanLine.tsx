import * as React from "react";
import { IconProps } from "./types";

export const ProScanLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 20A8 8 0 1 0 9.171 4.514l-1.52-1.52A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.96 9.96 0 0 1 2.446-6.553q.659-.76 1.456-1.373l7.512 7.512L12 13 5.865 6.865A8 8 0 0 0 12 20"
        />
      </svg>
    );
  },
);

export default ProScanLine;
