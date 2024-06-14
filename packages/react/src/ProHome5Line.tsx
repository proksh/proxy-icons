import * as React from "react";
import { IconProps } from "./types";

export const ProHome5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m21 8.5-9-6.75L3 8.5V21h18zM5 19V9.5l7-5.25 7 5.25V19h-6v-6h-2v6z"
        />
        <path
          fill={color}
          d="m21 8.5-9-6.75L3 8.5V21h18zM5 19V9.5l7-5.25 7 5.25V19h-6v-6h-2v6z"
        />
        <path
          fill={color}
          d="m21 8.5-9-6.75L3 8.5V21h18zM5 19V9.5l7-5.25 7 5.25V19h-6v-6h-2v6z"
        />
        <path
          fill={color}
          d="m21 8.5-9-6.75L3 8.5V21h18zM5 19V9.5l7-5.25 7 5.25V19h-6v-6h-2v6z"
        />
      </svg>
    );
  },
);

export default ProHome5Line;
