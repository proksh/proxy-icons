import * as React from "react";
import { IconProps } from "./types";

export const ProFileInfoLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 11v6h-2v-6zm0-2V7h-2v2z" />
        <path fill={color} d="M3 2h12.914L21 7.086V22H3zm2 2v16h14V8h-4V4z" />
      </svg>
    );
  },
);

export default ProFileInfoLine;
