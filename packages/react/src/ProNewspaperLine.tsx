import * as React from "react";
import { IconProps } from "./types";

export const ProNewspaperLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M14 15v-2H6v2zm-8 1h8v2H6z" />
        <path
          fill={color}
          d="M7 6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm1 4V8h2v2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M2 2h16v10h4v7a3 3 0 0 1-3 3H3l-1-1zm16 17v-5h2v5a1 1 0 1 1-2 0M16 4v16H4V4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProNewspaperLine;
