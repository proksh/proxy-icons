import * as React from "react";
import { IconProps } from "./types";

export const ProImageAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v10h-2V5H4v14h.086L14 9.086l3 3V16.5h-3V21H2z"
        />
        <path
          fill={color}
          d="M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 9h3v3h2v-3h3v-2h-3v-3h-2v3h-3z"
        />
      </svg>
    );
  },
);

export default ProImageAddFill;
