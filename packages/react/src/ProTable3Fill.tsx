import * as React from "react";
import { IconProps } from "./types";

export const ProTable3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h8v5H2zm0 6v4h9v-4zm0 6v4l1 1h8v-5zm11 5h8l1-1v-4h-9zm9-7v-4h-9v4zm0-6V4l-1-1h-8v5z"
        />
      </svg>
    );
  },
);

export default ProTable3Fill;
