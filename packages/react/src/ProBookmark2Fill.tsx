import * as React from "react";
import { IconProps } from "./types";

export const ProBookmark2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 3.5 1-1h14l1 1v18l-1.54.841L12 18.19l-6.46 4.15L4 21.5zM16 9H8v2h8z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProBookmark2Fill;
