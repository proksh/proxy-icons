import * as React from "react";
import { IconProps } from "./types";

export const ProInfoILine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-1 4H9V8h4v10h2v2H9v-2h2z"
        />
      </svg>
    );
  },
);

export default ProInfoILine;
