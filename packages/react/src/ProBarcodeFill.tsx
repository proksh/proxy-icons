import * as React from "react";
import { IconProps } from "./types";

export const ProBarcodeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 4H2v16h2zm18 0h-3v16h3zM9 4h3v16H9zm6 0h-2v16h2zm1 0h2v16h-2zM8 4H6v16h2z"
        />
      </svg>
    );
  },
);

export default ProBarcodeFill;
