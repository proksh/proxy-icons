import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.793 3.293 13.5 4v7h7v2h-7v7l-1.707.707-8-8v-1.414z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftFill;
