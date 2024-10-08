import * as React from "react";
import { IconProps } from "./types";

export const ProPlugLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10.5 15h3v-2h-3z" />
        <path
          fill={color}
          d="M14 6V2h2v4h4v8a4 4 0 0 1-4 4h-3v2h6v2h-7l-1-1v-3H8a4 4 0 0 1-4-4V6h4V2h2v4zm4 3V8H6v1zM6 11v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3z"
        />
      </svg>
    );
  },
);

export default ProPlugLine;
