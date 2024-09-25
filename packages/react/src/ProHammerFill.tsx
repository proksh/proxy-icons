import * as React from "react";
import { IconProps } from "./types";

export const ProHammerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.053 2.106 8.5 2H15v20l-1 1h-4l-1-1V9H2.5V4.882zM17 9h3l1-1V3l-1-1h-3z"
        />
      </svg>
    );
  },
);

export default ProHammerFill;
