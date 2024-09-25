import * as React from "react";
import { IconProps } from "./types";

export const ProSpam2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 13V7h2v6zm0 2v2h2v-2z" />
        <path
          fill={color}
          d="M6.923 3.206h10.154L22.155 12l-5.078 8.794H6.923L1.845 12zM4.155 12l3.922 6.794h7.846L19.845 12l-3.922-6.794H8.077z"
        />
      </svg>
    );
  },
);

export default ProSpam2Line;
