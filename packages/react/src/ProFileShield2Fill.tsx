import * as React from "react";
import { IconProps } from "./types";

export const ProFileShield2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.914 2H3v20h10.297l-.4-.316A5 5 0 0 1 11 17.765V10h10V7.086z"
        />
        <path
          fill={color}
          d="m14.139 20.116 3.361 2.66 3.361-2.66q.072-.057.139-.117a3 3 0 0 0 1-2.236V12h-9v5.763a3 3 0 0 0 1.139 2.353"
        />
      </svg>
    );
  },
);

export default ProFileShield2Fill;
