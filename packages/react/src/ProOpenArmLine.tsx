import * as React from "react";
import { IconProps } from "./types";

export const ProOpenArmLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M18 17a9 9 0 0 1 5.24-8.18l-.837-1.816A11 11 0 0 0 16 17v5h2zM6 17A9 9 0 0 0 .76 8.82l.837-1.816A11 11 0 0 1 8 17v5H6z"
        />
      </svg>
    );
  },
);

export default ProOpenArmLine;
