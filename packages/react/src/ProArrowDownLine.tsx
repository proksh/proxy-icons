import * as React from "react";
import { IconProps } from "./types";

export const ProArrowDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11 17.086-6.293-6.293-1.414 1.414L12 20.914l8.707-8.707-1.414-1.414L13 17.086V3.5h-2z"
        />
      </svg>
    );
  },
);

export default ProArrowDownLine;
