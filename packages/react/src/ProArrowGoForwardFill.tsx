import * as React from "react";
import { IconProps } from "./types";

export const ProArrowGoForwardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m15.707 5.293 4 4v1.414l-4 4L14 14v-3H9a3 3 0 1 0 0 6h5v2H9A5 5 0 0 1 9 9h5V6z"
        />
      </svg>
    );
  },
);

export default ProArrowGoForwardFill;
