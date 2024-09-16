import * as React from "react";
import { IconProps } from "./types";

export const ProBox2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 1.134h-1l-8.66 5-.5.866v10l.5.866 8.66 5h1l8.66-5 .5-.866V7l-.5-.866zM4.34 7.577 12 3.155l7.66 4.422v8.846L12 20.845V12L4.34 7.744z"
        />
      </svg>
    );
  },
);

export default ProBox2Line;