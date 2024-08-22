import * as React from "react";
import { IconProps } from "./types";

export const ProTaskLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11 15.914 5.707-5.707-1.414-1.414L11 13.086l-2.293-2.293-1.414 1.414z"
        />
        <path
          fill={color}
          d="M4 2 3 3v18l1 1h16l1-1V3l-1-1zm1 18V4h14v16z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProTaskLine;
