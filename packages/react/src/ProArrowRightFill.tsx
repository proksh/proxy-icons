import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.207 3.293 10.5 4v7h-7v2h7v7l1.707.707 8-8v-1.414z"
        />
      </svg>
    );
  },
);

export default ProArrowRightFill;
