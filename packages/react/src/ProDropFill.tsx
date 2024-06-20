import * as React from "react";
import { IconProps } from "./types";

export const ProDropFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 .164a55 55 0 0 1 1.949 1.796 49 49 0 0 1 2.809 2.98c1.02 1.186 2.063 2.537 2.856 3.895C20.392 10.17 21 11.627 21 13a9 9 0 1 1-18 0c0-1.373.608-2.831 1.386-4.165.793-1.358 1.835-2.709 2.856-3.894a49 49 0 0 1 2.81-2.98A54 54 0 0 1 12 .163"
        />
      </svg>
    );
  },
);

export default ProDropFill;
