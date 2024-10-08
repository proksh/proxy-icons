import * as React from "react";
import { IconProps } from "./types";

export const ProCheckboxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm13.707 3.207-1.414-1.414L11 13.086l-2.293-2.293-1.414 1.414L11 15.914z"
        />
      </svg>
    );
  },
);

export default ProCheckboxFill;
