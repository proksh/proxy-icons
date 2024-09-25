import * as React from "react";
import { IconProps } from "./types";

export const ProAspectRatioLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 15v-3h2v5h-5v-2zm-5-8H6v5h2V9h3z" />
        <path fill={color} d="M2 3h20v18H2zm2 2v14h16V5z" />
      </svg>
    );
  },
);

export default ProAspectRatioLine;
