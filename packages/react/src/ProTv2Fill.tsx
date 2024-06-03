import * as React from "react";
import { IconProps } from "./types";

export const ProTv2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m2 4 1-1h18l1 1v14l-1 1H3l-1-1zm3 18h14v-2H5z" />
      </svg>
    );
  },
);

export default ProTv2Fill;
