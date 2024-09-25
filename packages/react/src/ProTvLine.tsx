import * as React from "react";
import { IconProps } from "./types";

export const ProTvLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.586 5 6.293 2.707l1.414-1.414L11.414 5h1.172l3.707-3.707 1.414 1.414L15.414 5H21l1 1v14l-1 1H3l-1-1V6l1-1zM4 19h16V7H4z"
        />
      </svg>
    );
  },
);

export default ProTvLine;
