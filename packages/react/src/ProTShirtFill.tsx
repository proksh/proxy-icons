import * as React from "react";
import { IconProps } from "./types";

export const ProTShirtFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.95 2.293H5.536L1.293 6.536V7.95L5 11.657V21l1 1h12l1-1v-9.343l3.707-3.707V6.536l-4.242-4.243H17.05L14.343 5H9.657z"
        />
      </svg>
    );
  },
);

export default ProTShirtFill;
