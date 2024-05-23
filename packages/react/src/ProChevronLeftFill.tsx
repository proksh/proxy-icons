import * as React from "react";
import { IconProps } from "./types";

export const ProChevronLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13.293 5.293 15 6v12l-1.707.707-6-6v-1.414z" />
      </svg>
    );
  },
);

export default ProChevronLeftFill;
