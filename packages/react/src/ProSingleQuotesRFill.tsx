import * as React from "react";
import { IconProps } from "./types";

export const ProSingleQuotesRFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15.5 4.5h-7v7h2.605L9 19.5h3.5l3-8z" />
      </svg>
    );
  },
);

export default ProSingleQuotesRFill;
