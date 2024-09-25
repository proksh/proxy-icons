import * as React from "react";
import { IconProps } from "./types";

export const ProFontMonoFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 3.5H5.5V21h3v-6.5H18v-3H8.5v-5H19z" />
      </svg>
    );
  },
);

export default ProFontMonoFill;
