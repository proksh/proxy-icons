import * as React from "react";
import { IconProps } from "./types";

export const ProHotelLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 7v2h2V7zm0 6v-2h2v2zm0 2v2h2v-2z" />
        <path
          fill={color}
          d="M4 3h14l1 1v5h2v12H3V4zm13 6V5H5v14h6V9zm2 2h-6v8h2v-6h2v6h2z"
        />
      </svg>
    );
  },
);

export default ProHotelLine;
