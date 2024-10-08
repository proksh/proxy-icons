import * as React from "react";
import { IconProps } from "./types";

export const ProPriceTag3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.935 10.115a2.005 2.005 0 0 0 2.828 0 1.987 1.987 0 0 0 0-2.818 2.005 2.005 0 0 0-2.828 0 1.99 1.99 0 0 0 0 2.818"
        />
        <path
          fill={color}
          d="M22.41 12.943 21.198 2.88 11.097 1.67.5 12.23 11.814 23.5zM3.328 12.23l8.496-8.464 7.576.906.909 7.548-8.495 8.464z"
        />
      </svg>
    );
  },
);

export default ProPriceTag3Line;
