import * as React from "react";
import { IconProps } from "./types";

export const ProArrowGoBackLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.707 6.707 8.293 5.293 3.586 10l4.707 4.707 1.414-1.414L7.414 11H15a3 3 0 1 1 0 6h-5v2h5a5 5 0 0 0 0-10H7.414z"
        />
      </svg>
    );
  },
);

export default ProArrowGoBackLine;
