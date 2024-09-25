import * as React from "react";
import { IconProps } from "./types";

export const ProRecycleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9.944 8.575 2.054-3.558 1.464 2.536-1.948 1.125 5.764 2.445.298-5.945-1.516.875-2.763-4.786h-2.598L7.346 7.075zm-1.446 7.013-.764-6.215-5.298 2.715 1.516.875-2.764 4.786 1.3 2.25h6.706v-3H5.086l1.464-2.536zM11 18.52l5-3.77V17h2.928l-2.054-3.558 2.598-1.5 3.353 5.808L21.526 20H16v1.75z"
        />
      </svg>
    );
  },
);

export default ProRecycleFill;
