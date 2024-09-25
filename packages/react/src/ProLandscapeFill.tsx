import * as React from "react";
import { IconProps } from "./types";

export const ProLandscapeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m12.816 13h4.363L14.5 5.9l-2.404 4.438zM16 21H2L9 9z"
        />
      </svg>
    );
  },
);

export default ProLandscapeFill;
