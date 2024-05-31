import * as React from "react";
import { IconProps } from "./types";

export const ProHospitalLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 6v2H9v2h2v2h2v-2h2V8h-2V6z" />
        <path
          fill={color}
          d="m3 3 1-1h16l1 1v17h2v2H1v-2h2zm2 17h3v-6h8v6h3V4H5zm9 0v-4h-4v4z"
        />
      </svg>
    );
  },
);

export default ProHospitalLine;
