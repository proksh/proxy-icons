import * as React from "react";
import { IconProps } from "./types";

export const ProMessengerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.625 11.5a9.375 9.375 0 1 1 6.924 9.051l-1.928 1.102a1 1 0 0 1-1.496-.868v-1.979a9.36 9.36 0 0 1-3.5-7.306m3.74 2.815c-.291.466.274.993.718.67l2.778-2.02a1 1 0 0 1 1.239.05l2.043 1.75a1 1 0 0 0 1.483-.204l3.461-5.192c.32-.48-.292-1.031-.736-.662l-2.744 2.287a1 1 0 0 1-1.24.031l-2.496-1.872a1 1 0 0 0-1.448.27z"
        />
      </svg>
    );
  },
);

export default ProMessengerFill;
