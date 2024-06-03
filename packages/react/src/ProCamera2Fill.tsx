import * as React from "react";
import { IconProps } from "./types";

export const ProCamera2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" />
        <path
          fill={color}
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm15 2v2h2V6zm-9.5 6a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"
        />
      </svg>
    );
  },
);

export default ProCamera2Fill;
