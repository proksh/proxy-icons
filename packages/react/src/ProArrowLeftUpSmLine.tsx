import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftUpSmLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M9.003 10.554v4.449h-2v-8h8v2h-4.449l6.196 6.195-1.552 1.552z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftUpSmLine;
