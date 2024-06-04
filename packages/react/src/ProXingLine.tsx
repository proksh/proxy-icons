import * as React from "react";
import { IconProps } from "./types";

export const ProXingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.444 3.5 13.81 14.99 17.857 22h-2.31l-4.045-7.009H11.5L18.134 3.5zM8.31 7l2.422 4.196-.002.001L7.67 16.5H5.36l3.061-5.305L6.002 7z"
        />
      </svg>
    );
  },
);

export default ProXingLine;
