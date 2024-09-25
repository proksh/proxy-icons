import * as React from "react";
import { IconProps } from "./types";

export const ProCodeBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm10.613 3L9.279 17h2.108l3.334-10zM9.707 9.707 8.293 8.293 4.586 12l3.707 3.707 1.414-1.414L7.414 12zm4.586 0L16.586 12l-2.293 2.293 1.414 1.414L19.414 12l-3.707-3.707z"
        />
      </svg>
    );
  },
);

export default ProCodeBoxFill;
