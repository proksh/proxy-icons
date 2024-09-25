import * as React from "react";
import { IconProps } from "./types";

export const ProFlag2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h17l.864 1.504L17.658 10l3.206 5.496L20 17H4v5H2z"
        />
      </svg>
    );
  },
);

export default ProFlag2Fill;
