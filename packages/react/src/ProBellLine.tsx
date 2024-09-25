import * as React from "react";
import { IconProps } from "./types";

export const ProBellLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.988 3.22a2 2 0 1 0-3.976 0 9.02 9.02 0 0 0-6.29 5.24l.105-.028a23 23 0 0 1 2.49-.52A6.99 6.99 0 0 1 12 5a6.99 6.99 0 0 1 5.683 2.912 23 23 0 0 1 2.594.548 9.02 9.02 0 0 0-6.289-5.24m6.834 10.573C19.99 17.904 16.357 21 12 21s-7.99-3.096-8.821-7.207C1.81 13.293 1 12.672 1 12c0-1.657 4.925-3 11-3s11 1.343 11 3c0 .672-.81 1.292-2.178 1.793m-.928-1.791q-.29-.098-.642-.194C17.477 11.324 14.912 11 12 11s-5.477.324-7.252.808q-.353.097-.642.194l.811.296.222 1.098A7.01 7.01 0 0 0 11 18.93v-2.197A2 2 0 0 1 12 13a2 2 0 0 1 1 3.732v2.197a7.01 7.01 0 0 0 5.861-5.533l.222-1.098z"
        />
      </svg>
    );
  },
);

export default ProBellLine;
