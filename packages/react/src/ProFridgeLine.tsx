import * as React from "react";
import { IconProps } from "./types";

export const ProFridgeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7.5 8V5h2v3zm0 6.5v4h2v-4z" />
        <path
          fill={color}
          d="M5 1h14l1 1v20l-1 1H5l-1-1V2zm13 9V3H6v7zM6 12v9h12v-9z"
        />
      </svg>
    );
  },
);

export default ProFridgeLine;
