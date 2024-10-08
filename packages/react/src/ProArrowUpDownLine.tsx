import * as React from "react";
import { IconProps } from "./types";

export const ProArrowUpDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 3.086 5.207 5.207-1.414 1.414L8 6.914V20H6V6.914L3.207 9.707 1.793 8.293zm9 14-2.793-2.793-1.414 1.414L17 20.914l5.207-5.207-1.414-1.414L18 17.086V4h-2z"
        />
      </svg>
    );
  },
);

export default ProArrowUpDownLine;
