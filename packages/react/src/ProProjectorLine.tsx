import * as React from "react";
import { IconProps } from "./types";

export const ProProjectorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 15H6v2h2z" />
        <path
          fill={color}
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm2 15h16v-7h-1.126a4.002 4.002 0 0 1-7.748 0H4zm0-9h7.126a4.002 4.002 0 0 1 7.748 0H20V5H4zm11 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
      </svg>
    );
  },
);

export default ProProjectorLine;
