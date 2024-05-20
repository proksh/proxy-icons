import * as React from "react";
import { IconProps } from "./types";

export const ProShareLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5.293 8.293 1.414 1.414L11 5.414V16h2V5.414l4.293 4.293 1.414-1.414L12 1.586z"
        />
        <path fill={color} d="M5 14v5h14v-5h2v6l-1 1H4l-1-1v-6z" />
      </svg>
    );
  },
);

export default ProShareLine;
