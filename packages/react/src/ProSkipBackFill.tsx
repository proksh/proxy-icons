import * as React from "react";
import { IconProps } from "./types";

export const ProSkipBackFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20 5-1.474-.88L6 10.864V5H4v14h2v-5.864l12.526 6.745L20 19z"
        />
      </svg>
    );
  },
);

export default ProSkipBackFill;
