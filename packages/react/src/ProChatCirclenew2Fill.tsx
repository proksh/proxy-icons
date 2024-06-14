import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclenew2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 3V0h2v3h3v2h-3v3h-2V5h-3V3z" />
        <path
          fill={color}
          d="M17.5 10V6.5H14V2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 1.183 4.721l-1.145 4.004 1.237 1.236 4.004-1.144A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q-.002-1.03-.2-2z"
        />
      </svg>
    );
  },
);

export default ProChatCirclenew2Fill;
