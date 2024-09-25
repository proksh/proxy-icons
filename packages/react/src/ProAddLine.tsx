import * as React from "react";
import { IconProps } from "./types";

export const ProAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 13v6h2v-6h6v-2h-6V5h-2v6H5v2z" />
      </svg>
    );
  },
);

export default ProAddLine;
