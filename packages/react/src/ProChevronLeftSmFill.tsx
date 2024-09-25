import * as React from "react";
import { IconProps } from "./types";

export const ProChevronLeftSmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m14.5 16-1.707.707-4-4v-1.414l4-4L14.5 8z" />
      </svg>
    );
  },
);

export default ProChevronLeftSmFill;
