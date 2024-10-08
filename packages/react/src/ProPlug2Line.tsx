import * as React from "react";
import { IconProps } from "./types";

export const ProPlug2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 6V2h-2v4H9V2H7v4H4v8a4 4 0 0 0 4 4h3v3l1 1h7v-2h-6v-2h3a4 4 0 0 0 4-4V6zm1 2v1H6V8zM6 14v-3h12v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"
        />
        <path fill={color} d="M11 5V2h2v3z" />
      </svg>
    );
  },
);

export default ProPlug2Line;
