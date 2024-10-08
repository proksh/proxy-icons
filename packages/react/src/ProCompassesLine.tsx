import * as React from "react";
import { IconProps } from "./types";

export const ProCompassesLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 2v2.126a4.002 4.002 0 0 0-1.79 6.74L3.132 21.505l1.736.992 6.078-10.636a4 4 0 0 0 2.108 0l6.078 10.636 1.736-.992-6.078-10.638A4.002 4.002 0 0 0 13 4.127V2zm1 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    );
  },
);

export default ProCompassesLine;
