import * as React from "react";
import { IconProps } from "./types";

export const ProRocket2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path
          fill={color}
          d="M12.319 2.052 12 1.945l-.318.107A8.34 8.34 0 0 0 6 9.955v5.564l-2.756 2.205 2.368 4.736L9.302 20h5.395l3.58 2.387 3.11-4.664L18 15.465v-5.51a8.34 8.34 0 0 0-5.681-7.903M8 9.955a6.34 6.34 0 0 1 4-5.89c2.404.952 4 3.281 4 5.89v6.58l2.613 1.742-.89 1.336L15.303 18H8.697l-2.31 1.54-.63-1.264L8 16.48z"
        />
      </svg>
    );
  },
);

export default ProRocket2Line;
