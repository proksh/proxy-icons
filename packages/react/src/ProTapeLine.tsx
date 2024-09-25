import * as React from "react";
import { IconProps } from "./types";

export const ProTapeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.17 13A3 3 0 1 1 16 15H8a3 3 0 1 1 2.83-2zM15 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        />
        <path fill={color} d="M22 3H2v18h20zM4 19V5h16v14z" />
      </svg>
    );
  },
);

export default ProTapeLine;
