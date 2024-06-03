import * as React from "react";
import { IconProps } from "./types";

export const ProShutDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 2v10h2V2z" />
        <path
          fill={color}
          d="M4 12a7.98 7.98 0 0 1 2.972-6.223L5.714 4.223A9.98 9.98 0 0 0 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10a9.98 9.98 0 0 0-3.714-7.777l-1.258 1.554A8 8 0 1 1 4 12"
        />
      </svg>
    );
  },
);

export default ProShutDownLine;
