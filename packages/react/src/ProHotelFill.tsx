import * as React from "react";
import { IconProps } from "./types";

export const ProHotelFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h14l1 1v5h2v12H3zm4 5h2V7H7zm0 2v2h2v-2zm0 6h2v-2H7zm10 2h2v-8h-6v8h2v-6h2z"
        />
      </svg>
    );
  },
);

export default ProHotelFill;
