import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBin2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M18 3H6v2h12zm-9 8v6h2v-6zm4 6v-6h2v6z" />
        <path fill={color} d="M2 6h20v2h-2v13l-1 1H5l-1-1V8H2zm4 2v12h12V8z" />
      </svg>
    );
  },
);

export default ProDeleteBin2Line;
