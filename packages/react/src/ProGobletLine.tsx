import * as React from "react";
import { IconProps } from "./types";

export const ProGobletLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 4.94V3h18v1.941l-8 8.941V19h5v2H6v-2h5v-5.118zM5.737 5l1.79 2h8.947l1.79-2zM12 12l2.685-3h-5.37z"
        />
      </svg>
    );
  },
);

export default ProGobletLine;
