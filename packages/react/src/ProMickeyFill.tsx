import * as React from "react";
import { IconProps } from "./types";

export const ProMickeyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 2a4.5 4.5 0 0 0-.883 8.914 8 8 0 1 0 14.765 0A4.502 4.502 0 0 0 18.5 2a4.5 4.5 0 0 0-4.493 4.254A8 8 0 0 0 12 6a8 8 0 0 0-2.007.254A4.5 4.5 0 0 0 5.5 2"
        />
      </svg>
    );
  },
);

export default ProMickeyFill;
