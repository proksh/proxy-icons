import * as React from "react";
import { IconProps } from "./types";

export const ProArrowUpDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.293 3.793-4.5 4.5L2.5 10H6v10h2V10h3.5l.707-1.707-4.5-4.5zM16 14h-3.5l-.707 1.707 4.5 4.5h1.414l4.5-4.5L21.5 14H18V4h-2z"
        />
      </svg>
    );
  },
);

export default ProArrowUpDownFill;
