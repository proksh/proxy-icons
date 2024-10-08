import * as React from "react";
import { IconProps } from "./types";

export const ProDragDropLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 3 1-1h1v2H2zm4-1h2v2H6zm4 0h2v2h-2zm4 0h1l1 1v1h-2zM2 8V6h2v2zm14-2v2h5l1 1v4h-2v-3H10v10h4v2H9l-1-1v-5H6v-2h2V9l1-1h5V6zM2 12v-2h2v2zm0 3v-1h2v2H3z"
        />
        <path
          fill={color}
          d="m15.84 13.033 6.963 4.063-2.973.85 2.125 3.68-1.732 1-2.125-3.68-2.223 2.15z"
        />
      </svg>
    );
  },
);

export default ProDragDropLine;
