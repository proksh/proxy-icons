import * as React from "react";
import { IconProps } from "./types";

export const ProHome6Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 17v-2H8v2z" />
        <path fill={color} d="M16 17v-2H8v2z" />
        <path fill={color} d="M16 17v-2H8v2z" />
        <path fill={color} d="M16 17v-2H8v2z" />
        <path
          fill={color}
          d="m21 8.5-9-6.75L3 8.5V21h18zM5 19V9.5l7-5.25 7 5.25V19z"
        />
        <path
          fill={color}
          d="m21 8.5-9-6.75L3 8.5V21h18zM5 19V9.5l7-5.25 7 5.25V19z"
        />
        <path
          fill={color}
          d="m21 8.5-9-6.75L3 8.5V21h18zM5 19V9.5l7-5.25 7 5.25V19z"
        />
        <path
          fill={color}
          d="m21 8.5-9-6.75L3 8.5V21h18zM5 19V9.5l7-5.25 7 5.25V19z"
        />
      </svg>
    );
  },
);

export default ProHome6Line;
