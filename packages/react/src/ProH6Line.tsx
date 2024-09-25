import * as React from "react";
import { IconProps } from "./types";

export const ProH6Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 21h2v-8h7v8h2V4h-2v7H4V4H2zm13.084-6.082L19.06 8h2.307l-2.873 5h.007a4 4 0 1 1-3.416 1.918m1.649 1.145a2 2 0 1 0 .066-.115z"
        />
      </svg>
    );
  },
);

export default ProH6Line;
