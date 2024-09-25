import * as React from "react";
import { IconProps } from "./types";

export const ProArrowDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 10.5h7l.707 1.707-8 8h-1.414l-8-8L4 10.5h7v-7h2z"
        />
      </svg>
    );
  },
);

export default ProArrowDownFill;
