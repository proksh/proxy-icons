import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.004 15.585 17.29 5.3l1.414 1.414L8.418 17h8.586v2h-12V7h2z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftDownLine;
