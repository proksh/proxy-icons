import * as React from "react";
import { IconProps } from "./types";

export const ProSkipDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 16v2H6v-2zm-6.707-2.793-5.5-5.5L6.5 6h11l.707 1.707-5.5 5.5z"
        />
      </svg>
    );
  },
);

export default ProSkipDownFill;
