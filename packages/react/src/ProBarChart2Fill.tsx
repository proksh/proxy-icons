import * as React from "react";
import { IconProps } from "./types";

export const ProBarChart2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15 2h-5v20h5zM8 8H3v14h5zm14 3h-5v11h5z" />
      </svg>
    );
  },
);

export default ProBarChart2Fill;
