import * as React from "react";
import { IconProps } from "./types";

export const ProSpeedFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.015 5.143 1.5 6v12l1.515.858 8.485-5.092V18l1.515.858 10-6v-1.716l-10-6L11.5 6v4.234z"
        />
      </svg>
    );
  },
);

export default ProSpeedFill;
