import * as React from "react";
import { IconProps } from "./types";

export const ProLogoutBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 3 1-1h14l1 1v18l-1 1H5l-1-1v-3h2v2h12V4H6v2H4z"
        />
        <path
          fill={color}
          d="M4.414 13H13.5v-2H4.414l1.793-1.793-1.414-1.414L.586 12l4.207 4.207 1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProLogoutBoxLine;
