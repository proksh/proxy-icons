import * as React from "react";
import { IconProps } from "./types";

export const ProExpandWidthLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 6v12H2V6zm10.707 10.707-1.414-1.414L15.586 13H8.414l2.293 2.293-1.414 1.414L4.586 12l4.707-4.707 1.414 1.414L8.414 11h7.172l-2.293-2.293 1.414-1.414L19.414 12zM22 18V6h-2v12z"
        />
      </svg>
    );
  },
);

export default ProExpandWidthLine;
