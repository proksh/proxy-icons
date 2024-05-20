import * as React from "react";
import { IconProps } from "./types";

export const ProLogoutBoxRLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20 3-1-1H5L4 3v18l1 1h14l1-1v-3h-2v2H6V4h12v2h2z"
        />
        <path
          fill={color}
          d="M19.586 13H10.5v-2h9.086l-1.793-1.793 1.414-1.414L23.414 12l-4.207 4.207-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProLogoutBoxRLine;
