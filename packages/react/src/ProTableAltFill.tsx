import * as React from "react";
import { IconProps } from "./types";

export const ProTableAltFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.5 3H22v11h-5.5zm-2 0h-5v11h5zm-7 0H2v11h5.5zM2 16v5h20v-5z"
        />
      </svg>
    );
  },
);

export default ProTableAltFill;
