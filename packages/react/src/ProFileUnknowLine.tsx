import * as React from "react";
import { IconProps } from "./types";

export const ProFileUnknowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 9a1.5 1.5 0 0 0-1.5 1.5h-2A3.5 3.5 0 1 1 12 14h-1v-2h1a1.5 1.5 0 0 0 0-3m-1 6v2h2v-2z"
        />
        <path fill={color} d="M3 2h12.914L21 7.086V22H3zm12 2H5v16h14V8h-4z" />
      </svg>
    );
  },
);

export default ProFileUnknowLine;
