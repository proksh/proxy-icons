import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBin5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 17v-6h2v6zm4-6v6h2v-6z" />
        <path
          fill={color}
          d="M8 2 7 3v3H2v2h2v13l1 1h14l1-1V8h2V6h-5V3l-1-1zm7 4H9V4h6zM6 8h12v12H6z"
        />
      </svg>
    );
  },
);

export default ProDeleteBin5Line;
