import * as React from "react";
import { IconProps } from "./types";

export const ProSettings4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        />
        <path
          fill={color}
          d="M21.66 6.423 12 .845 2.34 6.423v11.154L12 23.155l9.66-5.578zM4.34 7.577 12 3.155l7.66 4.422v8.846L12 20.845l-7.66-4.422z"
        />
      </svg>
    );
  },
);

export default ProSettings4Line;
