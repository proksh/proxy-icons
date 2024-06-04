import * as React from "react";
import { IconProps } from "./types";

export const ProMicrosoftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.001 5h-6v6h6zm2 0v6h6V5zm6 8h-6v6h6zm-8 6v-6h-6v6zm-8-16h18v18h-18z"
        />
      </svg>
    );
  },
);

export default ProMicrosoftLine;
