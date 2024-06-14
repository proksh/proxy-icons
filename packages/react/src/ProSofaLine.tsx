import * as React from "react";
import { IconProps } from "./types";

export const ProSofaLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 9a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v.337a3.5 3.5 0 0 1 1 5.612V21H2v-6.05a3.5 3.5 0 0 1 1-5.613zm2 .035A3.5 3.5 0 0 1 8 12.5V14h8v-1.5a3.5 3.5 0 0 1 3-3.465V9a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4zM3 12.5c0 .49.234.925.6 1.2l.4.3v5h16v-5l.4-.3a1.5 1.5 0 1 0-2.4-1.2V16H6v-3.5a1.5 1.5 0 0 0-3 0"
        />
      </svg>
    );
  },
);

export default ProSofaLine;
