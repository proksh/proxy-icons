import * as React from "react";
import { IconProps } from "./types";

export const ProTerminalWindowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 12h3v5H5zm2-4H5V6h2zm2 0h2V6H9z" />
        <path
          fill={color}
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm2 7v8h16v-8zm16-2V5H4v4z"
        />
      </svg>
    );
  },
);

export default ProTerminalWindowLine;
