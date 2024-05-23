import * as React from "react";
import { IconProps } from "./types";

export const ProExpandLeftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11.621 6.207-1.414-1.414L3 12l7.207 7.207 1.414-1.414L6.828 13h9.086v-2H6.828zM19.914 19V5h-2v14z"
        />
      </svg>
    );
  },
);

export default ProExpandLeftLine;
