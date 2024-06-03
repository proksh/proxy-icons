import * as React from "react";
import { IconProps } from "./types";

export const ProNotification3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 10a8 8 0 1 1 16 0v7h2v2H2v-2h2zm11 13v-2H9v2z"
        />
      </svg>
    );
  },
);

export default ProNotification3Fill;
