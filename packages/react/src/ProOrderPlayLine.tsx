import * as React from "react";
import { IconProps } from "./types";

export const ProOrderPlayLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M17 4V1l5 3v2H2V4zM2 13h20v-2H2zm20 7H2v-2h20z" />
      </svg>
    );
  },
);

export default ProOrderPlayLine;
