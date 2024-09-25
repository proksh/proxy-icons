import * as React from "react";
import { IconProps } from "./types";

export const ProAsteriskLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 21v-7.268l-6.294 3.634-1-1.732L10 12 3.706 8.366l1-1.732L11 10.268V3h2v7.268l6.294-3.634 1 1.732L14 12l6.294 3.634-1 1.732L13 13.732V21z"
        />
      </svg>
    );
  },
);

export default ProAsteriskLine;
