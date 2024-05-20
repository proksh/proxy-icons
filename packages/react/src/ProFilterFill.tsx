import * as React from "react";
import { IconProps } from "./types";

export const ProFilterFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3.5 4-.776 1.63L9 13.356V21l1 1h4l1-1v-7.645l6.276-7.724L20.5 4z"
        />
      </svg>
    );
  },
);

export default ProFilterFill;
