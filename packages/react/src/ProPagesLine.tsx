import * as React from "react";
import { IconProps } from "./types";

export const ProPagesLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M17 12h-4v-2h4zm-4 3h4v-2h-4zm4 1v2H7v-2z" />
        <path
          fill={color}
          d="M12 10H7v5h5zm-3 3v-1h1v1z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M4 2 3 3v18l1 1h16l1-1V3l-1-1zm1 4V4h14v2zm0 2v12h14V8z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProPagesLine;
