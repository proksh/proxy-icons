import * as React from "react";
import { IconProps } from "./types";

export const ProOpenSourceLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.001 2c5.523 0 10 4.477 10 10 0 4.4-2.841 8.136-6.789 9.473l-.226.074-2.904-7.55A2.016 2.016 0 0 0 14.001 12a2 2 0 1 0-2.083 1.998l-2.903 7.549-.225-.074C4.842 20.136 2 16.4 2 12 2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-4.099 14.872l1.48-3.849a4 4 0 1 1 5.239 0l1.479 3.85A8 8 0 0 0 12 4"
        />
      </svg>
    );
  },
);

export default ProOpenSourceLine;
