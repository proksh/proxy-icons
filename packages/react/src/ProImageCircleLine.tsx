import * as React from "react";
import { IconProps } from "./types";

export const ProImageCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
        <path
          fill={color}
          d="M21 16.364v.006l-.099.192a10 10 0 0 1-1.65 2.324 10 10 0 0 1-4.277 2.664c-.94.293-1.938.45-2.974.45a9.95 9.95 0 0 1-5.6-1.713l-.907-.694A9.98 9.98 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-1 4.364M12 4a8 8 0 0 0-5.088 14.174l8.052-8.052 4.688 4.22A8 8 0 0 0 12 4m6.78 12.248-3.744-3.37-6.388 6.388A8 8 0 0 0 12 20a8 8 0 0 0 6.78-3.752"
        />
      </svg>
    );
  },
);

export default ProImageCircleLine;
