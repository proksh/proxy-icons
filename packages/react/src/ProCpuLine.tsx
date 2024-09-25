import * as React from "react";
import { IconProps } from "./types";

export const ProCpuLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 8H8v8h8z" />
        <path
          fill={color}
          d="M16 4h3l1 1v3h2v2h-2v4h2v2h-2v3l-1 1h-3v2h-2v-2h-4v2H8v-2H5l-1-1v-3H2v-2h2v-4H2V8h2V5l1-1h3V2h2v2h4V2h2zM6 18h12V6H6z"
        />
      </svg>
    );
  },
);

export default ProCpuLine;
