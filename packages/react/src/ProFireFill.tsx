import * as React from "react";
import { IconProps } from "./types";

export const ProFireFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.63 2.223 11 .903V3c0 .358-.124.854-.402 1.482-.272.615-.661 1.289-1.119 1.982-.916 1.39-2.044 2.77-2.896 3.811l-.356.437a7.5 7.5 0 1 0 13.17 3.548l-.253-1.525-1.287.857a13.7 13.7 0 0 1-2.906 1.473q-.15.054-.298.1.341-.39.657-.796c.789-1.02 1.468-2.17 1.757-3.463.608-2.722-.596-5.572-4.438-8.683"
        />
      </svg>
    );
  },
);

export default ProFireFill;
