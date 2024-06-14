import * as React from "react";
import { IconProps } from "./types";

export const ProHomeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.75 9 6.75V21H3V8.5zM5 9.5V19h14V9.5l-7-5.25z"
        />
      </svg>
    );
  },
);

export default ProHomeLine;
