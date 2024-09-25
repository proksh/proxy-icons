import * as React from "react";
import { IconProps } from "./types";

export const ProMenuUnfoldFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.5 5 1.707-.707 4 4v1.414l-4 4L14.5 13zM3 7.5h9v-3H3zm0 12v-3h18v3zm0-6h9v-3H3z"
        />
      </svg>
    );
  },
);

export default ProMenuUnfoldFill;
