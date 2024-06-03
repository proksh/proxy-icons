import * as React from "react";
import { IconProps } from "./types";

export const ProPlayMiniLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6 6 1.515-.857 10 6v1.714l-10 6L6 18zm2 1.766v8.468L15.056 12z"
        />
      </svg>
    );
  },
);

export default ProPlayMiniLine;
