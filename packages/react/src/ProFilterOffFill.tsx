import * as React from "react";
import { IconProps } from "./types";

export const ProFilterOffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.607 12.607 18 15l1.414-1.414-12-12L6 3l1 1H3.5l-.776 1.63L9 13.356V21l1 1h4l1-1v-7.645zm5.669-6.977-3.133 3.856L12.657 4H20.5z"
        />
      </svg>
    );
  },
);

export default ProFilterOffFill;
