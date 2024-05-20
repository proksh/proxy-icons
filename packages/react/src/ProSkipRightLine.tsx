import * as React from "react";
import { IconProps } from "./types";

export const ProSkipRightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 6v12h-2V6zm-4.086 6-6.207 6.207-1.414-1.414L11.086 12 6.293 7.207l1.414-1.414z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSkipRightLine;
