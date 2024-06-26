import * as React from "react";
import { IconProps } from "./types";

export const ProCursorFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.649 1.531-.244 15.434 3.786-3.791 3.832 8.608 2.741-1.22-3.85-8.646 5.824-.442z"
        />
      </svg>
    );
  },
);

export default ProCursorFill;
