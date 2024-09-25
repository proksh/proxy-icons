import * as React from "react";
import { IconProps } from "./types";

export const ProIndentDecreaseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 5.5h18v-2H3zm3.293 2.293L8 8.5v7l-1.707.707-3.5-3.5v-1.414zM21 10.5H11v-2h10zm0 10H3v-2h18zm-10-5h10v-2H11z"
        />
      </svg>
    );
  },
);

export default ProIndentDecreaseFill;
