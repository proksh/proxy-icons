import * as React from "react";
import { IconProps } from "./types";

export const ProInputFieldLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 5v14H8v2h8v-2h-3V5h3V3H8v2zM8 7H1v10h7v-2H3V9h5zm8 2h5v6h-5v2h7V7h-7z"
        />
      </svg>
    );
  },
);

export default ProInputFieldLine;
