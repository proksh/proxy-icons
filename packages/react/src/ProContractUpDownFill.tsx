import * as React from "react";
import { IconProps } from "./types";

export const ProContractUpDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5.793 4.707 5.5 5.5h1.414l5.5-5.5L17.5 3h-11zm0 14.586 5.5-5.5h1.414l5.5 5.5L17.5 21h-11z"
        />
      </svg>
    );
  },
);

export default ProContractUpDownFill;
