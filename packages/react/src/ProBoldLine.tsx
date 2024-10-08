import * as React from "react";
import { IconProps } from "./types";

export const ProBoldLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 4H6v16h7.5a4.5 4.5 0 0 0 2.256-8.394A4.5 4.5 0 0 0 12.5 4m0 7H8V6h4.5a2.5 2.5 0 0 1 0 5M8 13h5.5a2.5 2.5 0 0 1 0 5H8z"
        />
      </svg>
    );
  },
);

export default ProBoldLine;
