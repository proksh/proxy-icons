import * as React from "react";
import { IconProps } from "./types";

export const ProBoldFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 3.5h-7v17h8a5 5 0 0 0 3-9 5 5 0 0 0-4-8m0 7h-4v-4h4a2 2 0 1 1 0 4m-4 3h5a2 2 0 1 1 0 4h-5z"
        />
      </svg>
    );
  },
);

export default ProBoldFill;
