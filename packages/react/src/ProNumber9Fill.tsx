import * as React from "react";
import { IconProps } from "./types";

export const ProNumber9Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1a7 7 0 1 0 .725 13.963L8.839 22h3.427l5.816-10.532A7 7 0 0 0 12 1M8 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        />
      </svg>
    );
  },
);

export default ProNumber9Fill;
