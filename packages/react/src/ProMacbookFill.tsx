import * as React from "react";
import { IconProps } from "./types";

export const ProMacbookFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m2 4 1-1h18l1 1v13l-1 1H3l-1-1zm21 15H1v2h22z" />
      </svg>
    );
  },
);

export default ProMacbookFill;
