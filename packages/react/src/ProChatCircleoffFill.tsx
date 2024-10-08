import * as React from "react";
import { IconProps } from "./types";

export const ProChatCircleoffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m18 20 3 3 1.414-1.414-20-20L1 3l3 3a9.96 9.96 0 0 0-2 6 9.96 9.96 0 0 0 1.183 4.721l-1.144 4.004 1.236 1.236 4.004-1.144A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 6-2m4-8a9.95 9.95 0 0 1-1.34 5.004L6.997 3.34A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10"
        />
      </svg>
    );
  },
);

export default ProChatCircleoffFill;
