import * as React from "react";
import { IconProps } from "./types";

export const ProChevronRightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10.707 5.293 9 6v12l1.707.707 6-6v-1.414z" />
      </svg>
    );
  },
);

export default ProChevronRightFill;
