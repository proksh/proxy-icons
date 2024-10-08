import * as React from "react";
import { IconProps } from "./types";

export const ProPsychotherapyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 10a8 8 0 0 1 15.953-.874l2.507 3.762-2.46 1.23V19h-4v3H6v-5.755A7.99 7.99 0 0 1 3 10m7 3h2v-2h2V9h-2V7h-2v2H8v2h2z"
        />
      </svg>
    );
  },
);

export default ProPsychotherapyFill;
