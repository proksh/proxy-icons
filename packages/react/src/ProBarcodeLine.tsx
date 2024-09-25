import * as React from "react";
import { IconProps } from "./types";

export const ProBarcodeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4h2v16H2zm17 0h3v16h-3zm-9 0H8v16h2zm1 0h2v16h-2zm5 0h-2v16h2zm1 0h1v16h-1zM7 4H6v16h1z"
        />
      </svg>
    );
  },
);

export default ProBarcodeLine;
