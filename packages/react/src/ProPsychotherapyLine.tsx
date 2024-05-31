import * as React from "react";
import { IconProps } from "./types";

export const ProPsychotherapyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10 9V7h2v2h2v2h-2v2h-2v-2H8V9z" />
        <path
          fill={color}
          d="M3 10a8 8 0 0 1 15.953-.874l2.507 3.762-2.46 1.23V19h-4v3H6v-5.755A7.99 7.99 0 0 1 3 10m8-6a6 6 0 0 0-3.428 10.925l.428.299V20h5v-3h4v-4.118l1.54-.77-1.537-2.305-.02-.262A6 6 0 0 0 11 4"
        />
      </svg>
    );
  },
);

export default ProPsychotherapyLine;
