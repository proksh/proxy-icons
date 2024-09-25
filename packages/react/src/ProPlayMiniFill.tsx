import * as React from "react";
import { IconProps } from "./types";

export const ProPlayMiniFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7.515 5.143 6 6v12l1.515.858 10-6v-1.716z" />
      </svg>
    );
  },
);

export default ProPlayMiniFill;
