import * as React from "react";
import { IconProps } from "./types";

export const ProEthFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 0 4.63 12.22 12 16.574l7.37-4.354zm0 24L4.63 13.617 12 18l7.37-4.383z"
        />
      </svg>
    );
  },
);

export default ProEthFill;
