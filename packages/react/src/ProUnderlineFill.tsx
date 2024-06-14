import * as React from "react";
import { IconProps } from "./types";

export const ProUnderlineFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 2v9a6.5 6.5 0 1 0 13 0V2h-3v9a3.5 3.5 0 1 1-7 0V2zM20 21.5v-3H4v3z"
        />
      </svg>
    );
  },
);

export default ProUnderlineFill;
