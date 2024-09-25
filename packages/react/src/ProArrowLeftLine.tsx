import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.914 11 6.293-6.293-1.414-1.414L3.086 12l8.707 8.707 1.414-1.414L6.914 13H20.5v-2z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftLine;
