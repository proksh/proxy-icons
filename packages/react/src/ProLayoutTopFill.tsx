import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutTopFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v5H2zm0 7v11h20V10z" />
      </svg>
    );
  },
);

export default ProLayoutTopFill;
