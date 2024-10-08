import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBin5Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 3h12v2H6zM2 6v2h2v13l1 1h14l1-1V8h2V6zm7 11v-6h2v6zm4 0v-6h2v6z"
        />
      </svg>
    );
  },
);

export default ProDeleteBin5Fill;
