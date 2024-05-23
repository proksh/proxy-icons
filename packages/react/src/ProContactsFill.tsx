import * as React from "react";
import { IconProps } from "./types";

export const ProContactsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 7a5 5 0 1 1 10 0A5 5 0 0 1 5 7M1 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3H1zM24 4h-5v2h5zm-4 10h4v2h-4zm4-5h-7v2h7z"
        />
      </svg>
    );
  },
);

export default ProContactsFill;
