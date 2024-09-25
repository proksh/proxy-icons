import * as React from "react";
import { IconProps } from "./types";

export const ProTextSpacingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 4h14v2h-6v9h-2V6H5z" />
        <path
          fill={color}
          d="m16.586 17-1.293-1.293 1.414-1.414L20.414 18l-3.707 3.707-1.414-1.414L16.586 19H7.414l1.293 1.293-1.414 1.414L3.586 18l3.707-3.707 1.414 1.414L7.414 17z"
        />
      </svg>
    );
  },
);

export default ProTextSpacingLine;
