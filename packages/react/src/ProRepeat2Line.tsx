import * as React from "react";
import { IconProps } from "./types";

export const ProRepeat2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m21.914 6-4.707-4.707-1.414 1.414L17.086 4H6a4 4 0 0 0-4 4v8h2V8a2 2 0 0 1 2-2zM2.086 18l4.707 4.707 1.414-1.414L6.914 20H18a4 4 0 0 0 4-4V8h-2v8a2 2 0 0 1-2 2z"
        />
      </svg>
    );
  },
);

export default ProRepeat2Line;
