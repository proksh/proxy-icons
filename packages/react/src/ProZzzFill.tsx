import * as React from "react";
import { IconProps } from "./types";

export const ProZzzFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 5.5h4l-4.2 5.6 1.2 2.4h6.5v-3H17l4.2-5.6L20 2.5h-7zm-10 8h4l-4.2 5.6L4 21.5h6.5v-3H7l4.2-5.6-1.2-2.4H3z"
        />
      </svg>
    );
  },
);

export default ProZzzFill;
