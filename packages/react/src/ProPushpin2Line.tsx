import * as React from "react";
import { IconProps } from "./types";

export const ProPushpin2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 3h12v2h-1v6.234l1.868 3.27L18 16h-5v7h-2v-7H6l-.895-1.447L7 10.763V5H6zm3 2v6l-.106.447L7.618 14h8.659l-1.145-2.004L15 11.5V5z"
        />
      </svg>
    );
  },
);

export default ProPushpin2Line;
