import * as React from "react";
import { IconProps } from "./types";

export const ProAnticlockwise2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m13.793.793 1.414 1.414L13.414 4H16a5 5 0 0 1 5 5v4h-2V9a3 3 0 0 0-3-3h-2.586l1.793 1.793-1.414 1.414L9.586 5zM4 10l-1 1v10l1 1h10l1-1V11l-1-1zm1 10v-8h8v8z"
        />
      </svg>
    );
  },
);

export default ProAnticlockwise2Line;
