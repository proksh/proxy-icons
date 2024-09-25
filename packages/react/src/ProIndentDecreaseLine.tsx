import * as React from "react";
import { IconProps } from "./types";

export const ProIndentDecreaseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 5.5H3v-2h18zm0 5H11v-2h10zm-18 10h18v-2H3zm18-5H11v-2h10zM8.207 9.207 5.414 12l2.793 2.793-1.414 1.414L2.586 12l4.207-4.207z"
        />
      </svg>
    );
  },
);

export default ProIndentDecreaseLine;
