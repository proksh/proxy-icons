import * as React from "react";
import { IconProps } from "./types";

export const ProBrush4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 23H8v-4H2v-7h1.5V4l1-1H8v6h2V3h9.5l1 1v8H22v7h-6zM4 14v3h6v4h4v-4h6v-3z"
        />
      </svg>
    );
  },
);

export default ProBrush4Fill;
