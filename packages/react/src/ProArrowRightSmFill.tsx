import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightSmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m10.5 6 1.707-.707 6 6v1.414l-6 6L10.5 18v-5h-5v-2h5z"
        />
      </svg>
    );
  },
);

export default ProArrowRightSmFill;
