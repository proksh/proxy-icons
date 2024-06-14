import * as React from "react";
import { IconProps } from "./types";

export const ProShining2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.579 8.421 12 1.5 8.421 8.421 1.5 12l6.921 3.579L12 22.5l3.579-6.921L22.5 12z"
        />
      </svg>
    );
  },
);

export default ProShining2Fill;
