import * as React from "react";
import { IconProps } from "./types";

export const ProOpenbaseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3 2 5.996l1 9.464 9 7.04 9-7.04 1-9.464zm7.837 4.436L12 19.96 4.163 7.436 12 5.088z"
        />
      </svg>
    );
  },
);

export default ProOpenbaseLine;
