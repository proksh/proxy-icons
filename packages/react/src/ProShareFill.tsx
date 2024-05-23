import * as React from "react";
import { IconProps } from "./types";

export const ProShareFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11.293 2.293-6 6L6 10h5v6h2v-6h5l.707-1.707-6-6z"
        />
        <path fill={color} d="M5 14v5h14v-5h2v6l-1 1H4l-1-1v-6z" />
      </svg>
    );
  },
);

export default ProShareFill;
