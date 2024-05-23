import * as React from "react";
import { IconProps } from "./types";

export const ProOpenArmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M.76 8.82A9 9 0 0 1 6 17v5h2v-5c0-4.436-2.626-8.256-6.403-9.996zm22.48 0A9 9 0 0 0 18 17v5h-2v-5c0-4.436 2.626-8.256 6.403-9.996z"
        />
      </svg>
    );
  },
);

export default ProOpenArmFill;
