import * as React from "react";
import { IconProps } from "./types";

export const ProGuideFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16 3 1.65-.76L22.038 6 17.65 9.76 16 9V7h-2a1 1 0 0 0-1 1v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h2z"
        />
      </svg>
    );
  },
);

export default ProGuideFill;
