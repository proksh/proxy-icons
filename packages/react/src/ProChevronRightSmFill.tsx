import * as React from "react";
import { IconProps } from "./types";

export const ProChevronRightSmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m9.5 16 1.707.707 4-4v-1.414l-4-4L9.5 8z" />
      </svg>
    );
  },
);

export default ProChevronRightSmFill;
