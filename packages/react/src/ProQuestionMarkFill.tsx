import * as React from "react";
import { IconProps } from "./types";

export const ProQuestionMarkFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1.5A6.5 6.5 0 0 0 5.5 8v1h3V8A3.5 3.5 0 0 1 12 4.5h.25a3.25 3.25 0 0 1 0 6.5H12l-1.5 1.5V17h3v-3.125A6.25 6.25 0 0 0 12.25 1.5zM12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
      </svg>
    );
  },
);

export default ProQuestionMarkFill;
