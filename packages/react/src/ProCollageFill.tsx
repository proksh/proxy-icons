import * as React from "react";
import { IconProps } from "./types";

export const ProCollageFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12.774 21-1.595-7.776L3 15.17V21zm2.042 0H21V3h-9.876zM9.082 3H3v10.115l7.777-1.852z"
        />
      </svg>
    );
  },
);

export default ProCollageFill;
