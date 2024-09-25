import * as React from "react";
import { IconProps } from "./types";

export const ProArrowGoForwardLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.293 6.707 1.414-1.414L20.414 10l-4.707 4.707-1.414-1.414L16.586 11H9a3 3 0 1 0 0 6h5v2H9A5 5 0 0 1 9 9h7.586z"
        />
      </svg>
    );
  },
);

export default ProArrowGoForwardLine;
