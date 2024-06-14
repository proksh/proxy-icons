import * as React from "react";
import { IconProps } from "./types";

export const ProFontMonoLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 6v6h10v2H8v7H6V4h13v2z" />
      </svg>
    );
  },
);

export default ProFontMonoLine;
