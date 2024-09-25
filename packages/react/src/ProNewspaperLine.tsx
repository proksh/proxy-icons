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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M14 15v-2H6v2zm-8 1h8v2H6zM7 6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm1 4V8h2v2z"
        />
        <path
          fill={color}
          d="M2 2h16v10h4v7a3 3 0 0 1-3 3H3l-1-1zm16 17a1 1 0 1 0 2 0v-5h-2zM16 4H4v16h12z"
        />
      </svg>
    );
  },
);

export default ProNewspaperLine;
