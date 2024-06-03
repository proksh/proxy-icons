import * as React from "react";
import { IconProps } from "./types";

export const ProCpuFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 4h-3V2h-2v2h-4V2H8v2H5L4 5v3H2v2h2v4H2v2h2v3l1 1h3v2h2v-2h4v2h2v-2h3l1-1v-3h2v-2h-2v-4h2V8h-2V5zm-8 3v4H7V7z"
        />
      </svg>
    );
  },
);

export default ProCpuFill;
