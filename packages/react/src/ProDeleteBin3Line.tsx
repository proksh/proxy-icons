import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBin3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 17V9h2v8zm4-8v8h2V9z" />
        <path
          fill={color}
          d="M8 2 7 3v1H2v2h2v15l1 1h14l1-1V6h2V4h-5V3l-1-1zM6 6h12v14H6z"
        />
      </svg>
    );
  },
);

export default ProDeleteBin3Line;
