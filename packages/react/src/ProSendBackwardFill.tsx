import * as React from "react";
import { IconProps } from "./types";

export const ProSendBackwardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 3h14v6h4v12H9v-4H3zm12 6V5H5v10h4V9z" />
      </svg>
    );
  },
);

export default ProSendBackwardFill;
