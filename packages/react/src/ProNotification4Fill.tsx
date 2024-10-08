import * as React from "react";
import { IconProps } from "./types";

export const ProNotification4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a8 8 0 0 0-8 8v7H2v2h20v-2h-2v-7a8 8 0 0 0-8-8m3 18H9a3 3 0 1 0 6 0"
        />
      </svg>
    );
  },
);

export default ProNotification4Fill;
