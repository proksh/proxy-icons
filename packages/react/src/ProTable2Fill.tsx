import * as React from "react";
import { IconProps } from "./types";

export const ProTable2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h7v5H3zm0 6v4h8v-4zm0 6v4l1 1h7v-5zm10 5h7l1-1v-4h-8zm8-7v-4h-8v4zm0-6V4l-1-1h-7v5z"
        />
      </svg>
    );
  },
);

export default ProTable2Fill;
