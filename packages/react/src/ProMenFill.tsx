import * as React from "react";
import { IconProps } from "./types";

export const ProMenFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.586 5H14V3h8v8h-2V6.414l-4.394 4.394a7 7 0 1 1-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProMenFill;
