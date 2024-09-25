import * as React from "react";
import { IconProps } from "./types";

export const ProTableAltLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v18h20V3zm12 2v9h-4V5zm2 9V5h4v9zM4 5h4v9H4zm0 11h16v3H4z"
        />
      </svg>
    );
  },
);

export default ProTableAltLine;
