import * as React from "react";
import { IconProps } from "./types";

export const ProInfoIFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-1.5 4.5H9v-3h4.5v10H15v3H9v-3h1.5z"
        />
      </svg>
    );
  },
);

export default ProInfoIFill;
