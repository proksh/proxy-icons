import * as React from "react";
import { IconProps } from "./types";

export const ProVerifiedBadgeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.386 4.35a2.977 2.977 0 0 1 4.255-1.742c.873.47 1.923.475 2.8.013a2.977 2.977 0 0 1 4.239 1.777 2.98 2.98 0 0 0 1.97 1.989 2.977 2.977 0 0 1 1.742 4.254 2.98 2.98 0 0 0-.013 2.8 2.977 2.977 0 0 1-1.777 4.24 2.98 2.98 0 0 0-1.989 1.97 2.977 2.977 0 0 1-4.254 1.74 2.98 2.98 0 0 0-2.8-.011 2.977 2.977 0 0 1-4.24-1.778 2.98 2.98 0 0 0-1.97-1.988 2.977 2.977 0 0 1-1.74-4.255c.47-.873.474-1.923.011-2.8A2.977 2.977 0 0 1 4.398 6.32a2.98 2.98 0 0 0 1.988-1.97M11 15.913l5.707-5.707-1.414-1.414L11 13.086l-2.293-2.293-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProVerifiedBadgeFill;
