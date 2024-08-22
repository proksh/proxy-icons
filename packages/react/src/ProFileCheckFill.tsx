import * as React from "react";
import { IconProps } from "./types";

export const ProFileCheckFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.914 2H3v20h11.965l-2.733-2.732 3.536-3.536L18 17.965l3-3v-7.88z"
        />
        <path
          fill={color}
          d="m18 22.914 5.207-5.207-1.414-1.414L18 20.086l-2.293-2.293-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProFileCheckFill;
