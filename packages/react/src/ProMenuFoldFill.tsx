import * as React from "react";
import { IconProps } from "./types";

export const ProMenuFoldFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9 5-1.707-.707-4 4v1.414l4 4L9 13zm3 2.5h9v-3h-9zm-9 12v-3h18v3zm9-6h9v-3h-9z"
        />
      </svg>
    );
  },
);

export default ProMenuFoldFill;
