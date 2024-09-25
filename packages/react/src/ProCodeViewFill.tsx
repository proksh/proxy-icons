import * as React from "react";
import { IconProps } from "./types";

export const ProCodeViewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.293 7.293 7 8v8l-1.707.707-4-4v-1.414zm13.414 0L17 8v8l1.707.707 4-4v-1.414z"
        />
      </svg>
    );
  },
);

export default ProCodeViewFill;
