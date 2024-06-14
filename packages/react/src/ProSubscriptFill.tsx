import * as React from "react";
import { IconProps } from "./types";

export const ProSubscriptFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.123 4h-3.79L9.679 8.738 6.125 4h-3.75l5.402 7.203L1.762 19h3.79l4.093-5.306L13.625 19h3.75l-5.829-7.771zm.627 16.5h4.75v-2h-1.586l.879-.879a2.414 2.414 0 0 0-1.707-4.121H20a2.5 2.5 0 0 0-2.5 2.5v.25h2V16a.5.5 0 0 1 .5-.5h.086a.414.414 0 0 1 .293.707l-2.63 2.629z"
        />
      </svg>
    );
  },
);

export default ProSubscriptFill;
