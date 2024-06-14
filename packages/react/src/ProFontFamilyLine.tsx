import * as React from "react";
import { IconProps } from "./types";

export const ProFontFamilyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.374 22 8 15.872V16h8.055l2.571 6h2.176L12.92 3.606h-1.838L3.198 22zM12 6.539 15.198 14H8.802z"
        />
      </svg>
    );
  },
);

export default ProFontFamilyLine;
