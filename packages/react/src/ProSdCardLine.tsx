import * as React from "react";
import { IconProps } from "./types";

export const ProSdCardLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 6H9v3h2zm1 3V5h2v4zm3-4v4h2V5z" />
        <path
          fill={color}
          d="m9.5 2-.707.293-4.5 4.5L4 7.5V21l1 1h14l1-1V3l-1-1zM6 7.914 9.914 4H18v16H6z"
        />
      </svg>
    );
  },
);

export default ProSdCardLine;
