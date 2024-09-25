import * as React from "react";
import { IconProps } from "./types";

export const ProGameFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.173 2.761A10 10 0 0 1 19.071 4.93l.707.707L13.414 12l6.364 6.364-.707.707A10.001 10.001 0 1 1 8.173 2.761M12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProGameFill;
