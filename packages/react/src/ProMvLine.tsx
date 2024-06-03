import * as React from "react";
import { IconProps } from "./types";

export const ProMvLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 15a3 3 0 0 1 4-2.83V6h5v2h-3v7a3 3 0 1 1-6 0"
        />
        <path fill={color} d="M22 3H2v18h20zM4 19V5h16v14z" />
      </svg>
    );
  },
);

export default ProMvLine;
