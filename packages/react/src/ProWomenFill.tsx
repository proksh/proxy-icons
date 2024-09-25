import * as React from "react";
import { IconProps } from "./types";

export const ProWomenFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 8a7 7 0 1 1 8 6.93V18h5v2h-5v4h-2v-4H6v-2h5v-3.07A7 7 0 0 1 5 8"
        />
      </svg>
    );
  },
);

export default ProWomenFill;
