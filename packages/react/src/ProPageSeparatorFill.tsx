import * as React from "react";
import { IconProps } from "./types";

export const ProPageSeparatorFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 3H5v5l1 1h12l1-1zm0 18H5v-5l1-1h12l1 1zm2.268-13.18-3 3.226.053 1.416 3 2.772L23 14.5v-6zm-18.536 0 3 3.226-.053 1.416-3 2.772L1 14.5v-6z"
        />
      </svg>
    );
  },
);

export default ProPageSeparatorFill;
