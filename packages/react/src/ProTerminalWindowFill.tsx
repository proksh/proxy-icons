import * as React from "react";
import { IconProps } from "./types";

export const ProTerminalWindowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 12h3v5H5z" />
        <path
          fill={color}
          d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm1 7h16v9H4zm3-2H5V6h2zm4 0H9V6h2z"
        />
      </svg>
    );
  },
);

export default ProTerminalWindowFill;
