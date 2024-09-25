import * as React from "react";
import { IconProps } from "./types";

export const ProPulseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9 9.08-1.638 3.549L6 13.5H1v-3h4.04l2.598-5.629h2.724L15 14.921l1.638-3.55L18 10.5h5v3h-4.04l-2.598 5.629h-2.724z"
        />
      </svg>
    );
  },
);

export default ProPulseFill;
