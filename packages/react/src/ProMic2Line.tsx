import * as React from "react";
import { IconProps } from "./types";

export const ProMic2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5M9 7a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0z"
        />
        <path
          fill={color}
          d="M12 20a7 7 0 0 1-7-7H3a9 9 0 1 0 18 0h-2a7 7 0 0 1-7 7"
        />
      </svg>
    );
  },
);

export default ProMic2Line;
