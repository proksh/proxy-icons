import * as React from "react";
import { IconProps } from "./types";

export const ProHospitalFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 3 1-1h16l1 1v17h2v2h-7v-8H8v8H1v-2h2zm8 3v2H9v2h2v2h2v-2h2V8h-2V6z"
        />
        <path fill={color} d="M10 22h4v-6h-4z" />
      </svg>
    );
  },
);

export default ProHospitalFill;
