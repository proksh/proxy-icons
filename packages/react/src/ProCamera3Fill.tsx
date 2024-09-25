import * as React from "react";
import { IconProps } from "./types";

export const ProCamera3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2H4v2h6zM3 5 2 6v14l1 1h18l1-1V6l-1-1zm4 2v2H4V7zm3 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"
        />
      </svg>
    );
  },
);

export default ProCamera3Fill;
