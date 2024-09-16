import * as React from "react";
import { IconProps } from "./types";

export const ProContactsBook3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2 3 3v2h3v2H2v2h4v2H2v2h4v2H2v2h4v2H3v2l1 1h16l1-1V3l-1-1zm6.5 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-1 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h-6z"
        />
      </svg>
    );
  },
);

export default ProContactsBook3Fill;