import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclenew2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 0h2v3h3v2h-3v3h-2V5h-3V3h3z" />
        <path
          fill={color}
          d="M14 4.252a8 8 0 0 0-8.882 11.83l.102.786-.764 2.676 2.676-.765.786.102A8 8 0 0 0 19.748 10H21.8q.198.97.2 2c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-4.721-1.183l-4.004 1.145-1.237-1.237 1.145-4.004A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2q1.03.002 2 .2z"
        />
      </svg>
    );
  },
);

export default ProChatCirclenew2Line;
