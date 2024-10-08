import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutGridLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 21V3H2v18zm-9-2v-6h7v6zm-2 0H4v-6h7zm2-8V5h7v6zm-2-6v6H4V5z"
        />
      </svg>
    );
  },
);

export default ProLayoutGridLine;
