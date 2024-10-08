import * as React from "react";
import { IconProps } from "./types";

export const ProTaxiLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path
          fill={color}
          d="M15 3H9v2H5.406L2 11.245V22h3v-2h14v2h3V11.245L18.594 5H15zm2.406 4 2.182 4H4.412l2.182-4zM4 18v-5h16v5z"
        />
      </svg>
    );
  },
);

export default ProTaxiLine;
