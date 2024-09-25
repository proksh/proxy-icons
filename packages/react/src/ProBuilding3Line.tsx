import * as React from "react";
import { IconProps } from "./types";

export const ProBuilding3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m10 .8 11 6.112V21H3V6.983l7 3zm2 3.4v8.817l-7-3V19h14V8.088z"
        />
      </svg>
    );
  },
);

export default ProBuilding3Line;
