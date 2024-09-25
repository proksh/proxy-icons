import * as React from "react";
import { IconProps } from "./types";

export const ProCornerLeftUpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16.5 11 .707-1.707-5.5-5.5h-1.414l-5.5 5.5L5.5 11H10v8h9v-2h-7v-6z"
        />
      </svg>
    );
  },
);

export default ProCornerLeftUpFill;
