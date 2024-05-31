import * as React from "react";
import { IconProps } from "./types";

export const ProMentalHealthFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M3 10a8 8 0 0 1 15.953-.874l2.507 3.762-2.46 1.23V19h-4v3H6v-5.755A7.99 7.99 0 0 1 3 10m8-2.2-.268-.261a1.933 1.933 0 0 0-2.677 0 1.8 1.8 0 0 0 0 2.6L11 13l2.945-2.86c.74-.719.74-1.883 0-2.601a1.933 1.933 0 0 0-2.677 0z"
        />
      </svg>
    );
  },
);

export default ProMentalHealthFill;
