import * as React from "react";
import { IconProps } from "./types";

export const ProMarkPenFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.523 1.156 7.224 9.455l-.707 2.121-2.308 2.308 5.657 5.657 2.308-2.308 2.121-.707 8.299-8.299zm-4.95 10.607 4.95-4.95 1.414 1.414-4.95 4.95zm-6.01 4.596 2.828 2.828-1.414 1.415-4.243-1.415z"
        />
      </svg>
    );
  },
);

export default ProMarkPenFill;
