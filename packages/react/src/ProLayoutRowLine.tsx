import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutRowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 21H3V3h18zM5 13v6h14v-6zm0-2h14V5H5z" />
      </svg>
    );
  },
);

export default ProLayoutRowLine;
