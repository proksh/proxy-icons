import * as React from "react";
import { IconProps } from "./types";

export const ProArrowTurnBackFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 14H6l-.707 1.707 4 4h1.414l4-4L14 14h-3V9a3 3 0 1 1 6 0v5h2V9A5 5 0 0 0 9 9z"
        />
      </svg>
    );
  },
);

export default ProArrowTurnBackFill;
