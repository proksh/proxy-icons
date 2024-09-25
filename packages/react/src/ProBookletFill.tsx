import * as React from "react";
import { IconProps } from "./types";

export const ProBookletFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2h11l1 1v18l-1 1H10zM8 2H4v4H2v2h2v3H2v2h2v3H2v2h2v4h4z"
        />
      </svg>
    );
  },
);

export default ProBookletFill;
