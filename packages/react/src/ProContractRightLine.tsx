import * as React from "react";
import { IconProps } from "./types";

export const ProContractRightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.207 4.793 7.793 6.207 12.586 11H3.5v2h9.086l-4.793 4.793 1.414 1.414L16.414 12zM20.5 5H18v14h2.5z"
        />
      </svg>
    );
  },
);

export default ProContractRightLine;
