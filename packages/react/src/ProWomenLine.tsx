import * as React from "react";
import { IconProps } from "./types";

export const ProWomenLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 8a7 7 0 1 1 8 6.93V18h5v2h-5v4h-2v-4H6v-2h5v-3.07A7 7 0 0 1 5 8m7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProWomenLine;
