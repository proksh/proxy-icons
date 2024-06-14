import * as React from "react";
import { IconProps } from "./types";

export const ProPassportFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        <path
          fill={color}
          d="M3 3v18l1 1h16l1-1V3l-1-1H4zm5 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0m8 6v2H8v-2z"
        />
      </svg>
    );
  },
);

export default ProPassportFill;
