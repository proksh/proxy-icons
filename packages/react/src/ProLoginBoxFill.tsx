import * as React from "react";
import { IconProps } from "./types";

export const ProLoginBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 3 1-1h14l1 1v18l-1 1H5l-1-1v-7.438h5.005V17L14 12.013 9.005 7v3.438H4z"
        />
      </svg>
    );
  },
);

export default ProLoginBoxFill;
