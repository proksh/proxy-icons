import * as React from "react";
import { IconProps } from "./types";

export const ProShutDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 22c5.523 0 10-4.477 10-10 0-5.185-3.947-9.449-9-9.95V12h-2V2.05c-5.053.5-9 4.764-9 9.95 0 5.523 4.477 10 10 10"
        />
      </svg>
    );
  },
);

export default ProShutDownFill;
