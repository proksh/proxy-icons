import * as React from "react";
import { IconProps } from "./types";

export const ProMotorbikeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M13.78 5H11V3h4.22l1 3H20v3h-2.78l1.334 4a4.5 4.5 0 1 1-1.966.425L15.446 10H14.28l-1.422 5.689-2.874 1.437q.015.185.015.374a4.5 4.5 0 1 1-6-4.244V12H2v-2h6.197l3-2h3.582zM3 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m18 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"
        />
      </svg>
    );
  },
);

export default ProMotorbikeFill;
